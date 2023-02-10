<template>
    <div>
        <GMapMap :center="{ lat: lat, lng: lon }" :zoom="12" map-type-id="terrain" class="map">
        </GMapMap>
   </div>
</template>
  
<script >
export default {
    name: 'App',
    props: {
        lat: {
            type: Number,
            default: 50
        },
        lon: {
            type: Number,
            default: 50
        }
    }
}
</script>
<style>
.map {
    width: 100%;
    height: 500px;
    border-radius: 16px;
}
</style>