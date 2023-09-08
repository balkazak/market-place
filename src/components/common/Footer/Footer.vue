<script setup>

import IconLogoFooter from "@/components/icons/IconLogoFooter.vue";
import IconFooterInsta from "@/components/icons/IconFooterInsta.vue";
import IconFooterTg from "@/components/icons/IconFooterTg.vue";
import IconFooterWtsp from "@/components/icons/IconFooterWtsp.vue";
import IconFooterTiktok from "@/components/icons/IconFooterTiktok.vue";

</script>

<template>
    <footer>
        <div class="_container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="footer-left">
                        <div class="logo">
                            <IconLogoFooter/>
                            <span>TABAY</span>
                        </div>
                        <div class="socials">
                            <a href="#">
                                <IconFooterInsta/>
                            </a>
                            <a href="#">
                                <IconFooterTg/>
                            </a>
                            <a href="#">
                                <IconFooterWtsp/>
                            </a>
                            <a href="#">
                                <IconFooterTiktok/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="footer-right">
                        <div class="footer-menu">
                            <span>Интернет магазин</span>

                        </div>
                        <div class="footer-menu">
                            <span>Интернет магазин</span>

                        </div>
                        <div class="footer-menu">
                            <span>Интернет магазин</span>

                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-lg-6">

                </div>
                <div class="col-lg-6">
                    <div class="footer-right">
                        <div class="footer-menu">
                            <a href="#" class="footer-link">Реквезиты</a>
                            <a href="#" class="footer-link">Бренд TradeWay</a>
                            <a href="#" class="footer-link">Вакансии</a>
                            <a href="#" class="footer-link">Информация для СМИ</a>
                        </div>
                        <div class="footer-menu">
                            <a href="#" class="footer-link">Реквезиты</a>
                            <a href="#" class="footer-link">Бренд TradeWay</a>
                            <a href="#" class="footer-link">Вакансии</a>
                            <a href="#" class="footer-link">Информация для СМИ</a>
                        </div>
                        <div class="footer-menu">
                            <a href="#" class="footer-link">Реквезиты</a>
                            <a href="#" class="footer-link">Бренд TradeWay</a>
                            <a href="#" class="footer-link">Вакансии</a>
                            <a href="#" class="footer-link">Информация для СМИ</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<style scoped>
@import './Footer.sass';
</style>
