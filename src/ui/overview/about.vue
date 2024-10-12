<div>
    <div class="banner"><h1>Player</h1></div>
    <div class="content">
        <div v-html="content"></div>
        <h1>The Tunes</h1>
        <div class="styled-links">
            <template v-for="({title, tunes}, i) in categoryList">
                <h2 v-if="title">{{title}}</h2>
                <router-link 
                    v-for="(tuneName, j) in tunes"
                    :to="{name: 'listen', params: { tuneName }}"
                    draggable="false"
                    :key="tuneName">
                    {{state.tunes[tuneName].displayName || tuneName}}
                </router-link>
            </template>
        </div>
    </div>
</div>

