<template>
    <GMapMap :center="{ lat:lat , lng:lon  }" :zoom="10" map-type-id="terrain" class="map">
    </GMapMap>
</template>
  
<script >
export default {
    name: 'App',
    props:{
        lat:{
            type: Number
        },
        lon:{
            type: Number
        }
    }
}
</script>
<style>
.map{
    width: 100%;
    height: 500px;
    border-radius: 16px;
}
</style>