<div class="bb-listen">
	<div class="bb-listen-tunes" v-touch:start="handleTouchStart" v-touch:moving="handleTouchMove" v-touch:end="handleTouchEnd" ref="tunes">
		<b-nav vertical pills class="flex-nowrap">
			<li v-for="{title, tunes} in categoryList" :key="title">
				<h4 v-if="title">{{title}}</h4>
				<b-nav vertical pills class="flex-nowrap">
					<router-link custom v-slot="{ isActive,href }" 
						v-for="tuneName in tunes"
						:to="{name: 'listen', params: { tuneName }}"
						:key="tuneName">
						<b-nav-item	:active="isActive" :href="href">
							{{state.tunes[tuneName].displayName || tuneName}}
						</b-nav-item>
					</router-link>
				</b-nav>
			</li>
		</b-nav>
	</div>

	<div class="bb-listen-info">
		<router-view></router-view>
	</div>
</div>