<template>
  <section :style="{
    backgroundImage:
      'url(https://www.sonydevicetechnology.co.th/Contents/about/SDT2023.png)',
    width: '1528px',
    height: '742px'
  }">
    <Imange/>
    <Emp_Name/>
    <Emp_Number/>
    <Add />
    
  </section>
</template>



<script setup>
import Imange from "./Imange.vue"
import Emp_Number from "./Emp_Number.vue"
import Emp_Name from "./Emp_name.vue";
import Add from './Add.vue'

</script>


