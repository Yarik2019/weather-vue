<template>
    <div>
        <GMapMap :center="{ lat: lat, lng: lon }" :zoom="10" map-type-id="terrain" class="map">
        </GMapMap>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20309.075323923767!2d30.4721233!3d50.4851493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd9a0f86a1e3%3A0x69edc59a713e77ce!2z0JrRg9GA0LXQvdGR0LLRgdC60L7QtSDQutC70LDQtNCx0LjRidC1!5e0!3m2!1sru!2sua!4v1676030691557!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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