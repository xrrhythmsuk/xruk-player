import VueRouter, { NavigationGuardNext, RouteConfig } from 'vue-router'
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
            props: { tuneName: 'Core Breaks' }
        } ]
    },
    { 
        path: '/listen', 
        component: withStateProvider(Listen),
        children: [ {
            path:'',
            component: TuneInfo,
            props: { tuneName: 'More Breaks' }
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
                    const { tuneName, patternName } = to.params
                    importData(to.params.importData, () => 
                        next(`/compose${tuneName? `/${tuneName}${patternName? `/${patternName}` : ''}` : ''}`))
                }
            },
            {
                name: 'compose',
                path: '',
                component: SongPlayer
            },
            {
                name: 'compose-new',
                path: '/new-song',
                component: SongPlayer,
                props: { newSong: true }
            },
            {
                name: 'song',
                path: 'songs/:songName',
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

  function importData(importData : string, next : NavigationGuardNext) {
    const errs = history.loadEncodedString(importData)
    if (errs.length) {
        next({ 
            name: "error", 
            params: { message: "Errors while loading data:\n" + errs.join("\n") }
        })
    }
    else 
        next()
  }

  const router = new VueRouter({
    routes,
    mode: 'hash',
    scrollBehavior: () => ({ x: 0, y: 0 })
})

router.beforeEach((to, from, next) => { 
    stopAllPlayers()
    next()
})

router.beforeEach((to, from, next) => { 
    const { query, path, hash } = to
    const i = query.import
    if(i && i[0]){
        importData(typeof i === "string" ? i : i[0], () => next({path, hash}))
    } else next()
})

if(process.env.NODE_ENV === 'production')
if(window.location.protocol.indexOf("https")<0)
{
    const importData = encodeURIComponent(objectToString(compressState(
        history.state,
        () => true,
        () => true, 
        true, 
        false,
        true)))
    window.location.replace(`https://${window.location.host}/${window.location.hash}?import=${importData}`)
}


export default router
