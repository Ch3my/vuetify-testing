<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!-- dense was taken out -->
      <v-list>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- ============================================================================ -->
        <!-- Ejemplo de Navegacion con varios Niveles Controlados por Array u Objeto -->
        <!-- ============================================================================ -->
        <v-list-group prepend-icon="mdi-account-circle">
          <template v-slot:activator>
            <v-list-item-title>Users</v-list-item-title>
          </template>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(admin, i) in admins" :key="i" link>
              <v-list-item-title v-text="admin[0]"></v-list-item-title>
              <v-list-item-icon>
                <v-icon :v-text="admin[1]"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(crud, i) in cruds" :key="i" link>
              <v-list-item-content>
                <v-list-item-title v-text="crud[0]"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>asdasda</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <!-- ============== FIN EJEMPLO NAVEGACIOn VARIOS NIVELES ================================== -->
        <!-- ====================== Ejemplo navegacion simple con Objetos ========================== -->
        <v-list-item v-for="nav in customNavOne" :key="nav.route" router :to="nav.route">
          <v-list-item-action>
            <v-icon>{{nav.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{nav.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- ============= FIN EJEMPLO NAVEGACIOn SIMPLE CON OBJETOS ================================ -->
        <!-- ======================================================================================== -->
        <!-- Navegacio de Test -->
        <!-- ========================================================= -->
        <template v-for="(menu, i) in testingMenu" >
        <v-list-group v-if="menu.children.length" prepend-icon="mdi-account-circle" :key="i">
          <template v-slot:activator>
            <v-list-item-title>{{menu.text}}</v-list-item-title>
          </template>
          <template v-for="(child, j) in menu.children">
          <v-list-group v-if="child.grandChildren.length" no-action sub-group :key="j">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{child.text}}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(grandChildren, k) in child.grandChildren" :key="k" link router :to="grandChildren.route">
              <v-list-item-title>{{grandChildren.text}}</v-list-item-title>
              <v-list-item-icon>
                <v-icon>{{grandChildren.icon}}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else link :key="j" router :to="child.route">
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{child.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </template>
        </v-list-group>
          <v-list-item v-else link :key="i" router :to="menu.route">
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{menu.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <!-- ============= FIN NAVEGACIOn TESTING -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <!-- Aqui viene slot. Donde se insertaran los componentes / otras funcionalidades de la pagina -->
      <slot />
    </v-content>

    <!-- <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>-->
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    customNavOne: [
      { icon: "mdi-alert", text: "Custom Nav Route 1", route: "/" },
      {
        icon: "mdi-android-studio",
        text: "Custom Nav Route 2",
        route: "/about"
      }
    ],
    admins: [["Management", "people_outline"], ["Settings", "settings"]],
    cruds: [
      ["Create", "mdi-clock"],
      ["Read", "mdi-account"],
      ["Update", "mdi-account"],
      ["Delete", "mdi-account"]
    ],
    testingMenu: [
      {
        icon: "mdi-account",
        text: "Geolocation",
        route: "",
        children: [
          {
            icon: "",
            text: "Have grandChildren",
            route: "",
            grandChildren: [{ icon: "", text: "Form", route: "/form" }]
          },
          { icon: "", text: "Geolocation", route: "/geolocation", grandChildren: [] }
        ]
      },
      { icon: "", text: "Camera", route: "/camera", children: [] }
    ]
  })
};
</script>