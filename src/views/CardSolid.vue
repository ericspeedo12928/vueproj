<template>
  <v-container class="p-5">
    <v-row>
      <v-col
        v-for="data in solidCardData"
        :key="data.title"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          :color="data.cardBg"
          dark
        >
          <v-card-title>
            <span class="white--text">{{ data.title }}</span>
          </v-card-title>

          <v-card-text class="white--text">
            {{ data.text }}
          </v-card-text>

          <v-card-actions class="justify-space-between">
            <div>
              <span class="white--text ms-2">{{ data.avatarName }}</span>
            </div>

            <div class="white--text">
              <span class="text-sm me-4">{{ data.likes }}</span>
              <span class="text-sm">{{ data.share }}</span>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      solidCardData: [
        {
          cardBg: 'info',
          title: 'Twitter Card',
          text: '"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',
          avatarImg: '1.png',
          avatarName: 'Mary Vaughn',
          likes: '1.2k',
          share: '80',
        },
        {
          cardBg: 'primary',
          title: 'Facebook Card',
          text: 'You’ve read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients in an effective',
          avatarImg: '2.png',
          avatarName: 'Eugene Clarke',
          likes: '3.2k',
          share: '49',
        },
        {
          cardBg: 'success',
          title: 'Linkedin Card',
          text: 'With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is directed.',
          avatarImg: '1.png',
          avatarName: 'Anne Burke1',
          likes: '1.2k',
          share: '80',
        },
      ],
    }
  },
}
</script>
