<template>
    <div class="modal">
        <div class="modal-content">
            <p>Do you want to delete the card?</p>
            <div class="btn-group">
                <button class="btn white" @click="CloseModal()">Close</button>
                <button class="btn red" @click="DeleteCradId(deleteId)">Delete</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "modalVue",
    props: {
        deleteId: {
            type: Number,
            default: 100
        }
    },
    methods: {
        ...mapMutations(['MODAL_WINDOW_CLOSE', "DELETE_WEATHER_DATA"]),

        CloseModal() {
            this.MODAL_WINDOW_CLOSE();
        },
        DeleteCradId(id) {
            this.DELETE_WEATHER_DATA(id);
            this.MODAL_WINDOW_CLOSE();
        },
    },
    computed: {
        ...mapState(['modal'])
    }
};
</script>

<style >
.modal {
    z-index: 100;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
}

.modal .modal-content {
    border-radius: 20px;
    padding: 48px 32px;
    max-width: 450px;
    background-image: linear-gradient(to bottom, rgba(22, 46, 75, 0.7), rgba(29, 36, 45));
    box-shadow: 3px 6px rgb(0 0 0 / 25%);
    color: #fff;
}

.modal .modal-content p {
    text-align: center;
}

.btn-group {
    display: flex;
    margin-top: 24px;
}

.btn {
    flex: 1;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
}

.white {
    color: #fff;
}

.red {
    color: red;
}
</style>