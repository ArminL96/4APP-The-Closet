<template>
    <ion-page>
      <ion-header>
        <NavBar>Outfits</NavBar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Outfits</ion-title>
          </ion-toolbar>
        </ion-header>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';
  import NavBar from '@/components/NavBar.vue';
  </script>
  