<template>
  <div class="widget-footer">
    
    <div class="zlogos">
        <div class="columns">
            <div class="column logo logo-1">
                <img class="zimg-responsive" alt="" src="@/assets/logo1.png">
            </div>
            <div class="column logo logo-2">
                <img class="zimg-responsive" alt="" src="@/assets/logo2.png">
            </div>
            <div class="column logo logo-3">
                <img class="zimg-responsive" alt="" src="@/assets/logo3.png">
            </div>
            <div class="column logo logo-4">
                <img class="zimg-responsive" alt="" src="@/assets/logo4.png">
            </div>
        </div>
    </div>

    <div class="disclaimer" v-html="$t('disclaimer')">        
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.widget-footer{
  margin-top: 4rem;
}
.logo img{
  max-height: 110px;
  margin: 0 auto;
  text-align: center;
}
.logo-3{
  margin-top: 1rem;
}
</style>