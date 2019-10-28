<template>
  <div>
    <h3>this is a web component  created in vue</h3>  
    <div> My name is {{name}} </div>
  </div>
</template>


<script>
export default {
  props:{
    name: {type: String,default:"mark"}
  }
}
</script>