
Vue.component('home', {
    data: function(){
        return {
        }
    },
    template: `
    <div class="">
        <img class="absolute-center" src="https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Combat/CombatButton.png">
        <player-fighters-selector
            class="fixed-top-left"
            name="Player 1"
            />
        <player-fighters-selector
            class="fixed-top-right"
            name="Player 2"/>
    </div>
    `
})

Vue.component('player-fighters-selector', {
    props: ['name'],
    template: `
        <q-card
          class="player-card text-white"
        >
          <q-card-section>
            <div class="text-h6">{{name}}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}asdfsad
          </q-card-section>
        </q-card>
    `
})
Vue.component('board', {
    data: function(){
        return {
            leftDrawerVisible: false,
            rightDrawerVisible: false,
        }
    },
    template: `
        <q-layout view="hHh lpR fFf">

            <q-drawer show-if-above v-model="leftDrawerVisible" side="left" elevated>
                <router-link to='/'>Home</router-link>
                <router-link to='/foo'>Foo</router-link>
                <router-link to='/bar'>Bar</router-link>
            </q-drawer>
            <q-drawer show-if-above v-model="rightDrawerVisible" side="right" elevated>
                <!-- drawer content -->
            </q-drawer>
            <q-page-container>

            </q-page-container>

        </q-layout>
    `
})

const router = new VueRouter({
    routes: [
    { path: '/foo', component: Vue.component('foo') },
    { path: '/bar', component: Vue.component('bar') },
    { path: '/', component: Vue.component('home') }
    ]
})

new Vue({
    el: '#app',
    router,
    data: function(){
        return {}
    },
    methods: {

    },
    created: function() {
    }
})