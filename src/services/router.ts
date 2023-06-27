import VueRouter, { RouteConfig } from 'vue-router'
import About from '../ui/overview/about'
import Listen from  '../ui/listen/listen'
import PatternPlayer from '../ui/pattern-player/pattern-player'
import TuneInfo from '../ui/tune-info/tune-info'
import Compose from '../ui/compose/compose'
import Error from '../ui/error'
import SongPlayer from '../ui/song-player/song-player'
import { stopAllPlayers } from './player'
import history, { withStateProvider } from './history'
import { objectToString } from '../utils'
import { compressState } from '../state/state'

const routes : RouteConfig[] = [
    {
      path: '/',
      component: About, 
      name: 'about',
      meta: { hasSidebar: false }
    },
    { 
        path: '/listen', 
        component: withStateProvider(Listen),
        children: [ {
            path:'',
            component: TuneInfo,
            meta: { showNav: true },
            props: { tuneName: 'General Breaks' }
        } ]
    },
    {
        path: '/listen/:tuneName',
        props: true,
        component: withStateProvider(Listen),
        children:  [
            {
                name: 'listen',
                path: '',
                props: true,
                component: TuneInfo
            },
            {
            name: 'listen pattern',
            props: ({params}) => ({...params, readonly: true }),
            path: ':patternName',
            component: PatternPlayer
        }]
    },
    {
        path: '/compose',
        component: withStateProvider(Compose),
        children: [
            {
                name: 'import',
                path: ':importData([^/]{50,})/:tuneName?/:patternName?',
                beforeEnter: (to, from, next) => {
                    const errs = history.loadEncodedString(to.params.importData)
                    if (errs.length) {
                        next({ 
                            name: "error", 
                            params: { message: "Errors while loading data:\n" + errs.join("\n") }
                        })
                    }
                    else if(to.query.home)
                        next('/')
                    else {
                        const { tuneName, patternName } = to.params
                        next(`/compose${tuneName? `/${tuneName}${patternName? `/${patternName}` : ''}` : ''}`)
                    }
                }
            },
            {
                name: 'compose',
                path: ':tuneName?',
                component: SongPlayer,
                props: true
            },
            {
                name: 'edit pattern',
                path: ':tuneName/:patternName',
                props: ({params}) => ({...params, readonly: false }),
                component: PatternPlayer
            },
            {
                name: 'error',
                path: 'error',
                props: true,
                component: Error
            }
            ]
        }
  ]

  const router = new VueRouter({
    routes,
    mode: 'hash',
    scrollBehavior: () => ({ x: 0, y: 0 })
})

router.beforeEach((from, to, next) => { 
    stopAllPlayers()
    next()
})

if(process.env.NODE_ENV === 'production')
if(window.location.protocol !== "https")
{
    const importData = encodeURIComponent(objectToString(compressState(
        history.state,
        () => true,
        () => true, 
        true, 
        false,
        true)))
    window.location.replace(`https://${window.location.host}/#/compose/${importData}?home=1`)
}


export default router