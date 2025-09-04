<template>
    <div class="header">
        <div class="header_left">
            <span class="title">Lenovo Forecast</span>
        </div>
        <div class="header_right">
            <div class="header_right_left">
                <img src="https://uxd.lenovo.com/assets/forecast_1.svg" alt="">
                <img src="https://uxd.lenovo.com/assets/forecast_2.svg" alt="">
            </div>
            <div class="header_right_center">
                <img src="https://uxd.lenovo.com/assets/forecast_3.svg" alt="">
            </div>
            <div class="header_right_right">
                <span>ConnieWang26</span>
                <a-avatar>
                    <img alt="avatar" src="https://uxd.lenovo.com/avatar_girl.svg" />
                </a-avatar>
            </div>

        </div>

    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {

        return {

        }
    },
}
</script>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px 0 20px;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header_left {
    display: flex;
    align-items: center;
}

.header_left .title {
    font-size: 16px;
    font-weight: bold;
    color: #4E5969;
}

.header_right {
    display: flex;
    align-items: center;
}

.header_right_left {
    display: flex;
}

.header_right_left img {
    width: 36px;
    height: 36px;
}

.header_right_center img {
    width: 24px;
    height: 24px;
    margin: 0 12px;
}

.header_right_right {
    display: flex;
    align-items: center;
    gap: 12px;
}

.header_right_right span {
    font-size: 16px;
    color: #1D2129;
}
</style>
