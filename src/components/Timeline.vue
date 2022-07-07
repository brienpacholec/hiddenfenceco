<template>
  <v-container>
    <v-timeline
      :reverse="reverse"
      dense
    >
      <v-timeline-item
        v-for="(step, index) in this.steps"
        :key="index"
      >
        <template v-slot:icon>
          <v-avatar>
            <img :src="step.src">
          </v-avatar>
        </template>
        <!-- <template v-slot:opposite>
          <span>{{step.title}}</span>
        </template> -->
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            {{step.title}}
          </v-card-title>
          <v-card-text>
            {{step.description}}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
    steps: {
      type: Array,
      required: true
    },
  }
}
</script>