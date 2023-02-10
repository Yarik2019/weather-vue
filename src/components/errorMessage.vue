<template>
    <div>
        <div class="error">
            {{ error }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'ErrorMessage',
    props: {
        error: {
            type: String
        }
    }
}
</script>

<style>
/*error message*/
.error {
    color: #fff;
    text-shadow: 3px 6px rgba(255, 255, 255, 0.25);

    font-size: 50px;
    font-weight: 900;
    text-align: center;
}
</style>