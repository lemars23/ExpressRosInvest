"use strict";

const aboutCompanyCarouselContentItems = {
    'about-company__carousel__button__team': 'about-company__carousel__content__team',
    'about-company__carousel__button__competencies': 'about-company__carousel__content__competencies',
    'about-company__carousel__button__professionals': 'about-company__carousel__content__professionals',
    'about-company__carousel__button__organs': 'about-company__carousel__content__organs'
};

const aboutCompanyCarouselButtons = document.querySelector('.about-company__carousel__buttons');

aboutCompanyCarouselButtons.addEventListener('click', event => {
    if(event.target && event.target.tagName === "BUTTON") {
        const CarouselButtonsItem = document.querySelectorAll('.about-company__carousel__buttons__item');
        const CarouselContentItem = document.querySelectorAll('.about-company__carousel__content__item');
        const CarouselButtonsItemActive = 'about-company__carousel__buttons__item__active';
        const CarouselContentItemActive = 'about-company__carousel__content__item__active';

        Array.from(CarouselButtonsItem).map(item => {
            item.classList.contains(CarouselButtonsItemActive) ? item.classList.remove(CarouselButtonsItemActive) : null;
        });

        Array.from(CarouselContentItem).map(item => {
            item.classList.contains(CarouselContentItemActive) ? item.classList.remove(CarouselContentItemActive) : null;
        });
        
        document.querySelector(`#${aboutCompanyCarouselContentItems[event.target.id]}`).classList.add(CarouselContentItemActive);
        
        event.target.classList.add(CarouselButtonsItemActive);
    }
});

const reviewsContentItems = document.querySelector('.reviews__content__items');
const sliderPageOfPages = document.querySelector('.reviews__content__buttons__pages_page');
const reviewsContentButtonsButtonRight = document.querySelector('#reviews__content__buttons__button__right');
const reviewsContentButtonsButtonLeft = document.querySelector('#reviews__content__buttons__button__left');

let positionReviewsContentItems = Number(reviewsContentItems.style.left);

reviewsContentButtonsButtonRight.addEventListener('click', () => {
    sliderPageOfPages.textContent = Number(sliderPageOfPages.textContent) + 1;
    positionReviewsContentItems -= 1296;
    reviewsContentItems.style.left = positionReviewsContentItems + 'px';
    if(sliderPageOfPages.textContent > 7) {
        positionReviewsContentItems = 0;
        sliderPageOfPages.textContent = 1;
        reviewsContentItems.style.left = positionReviewsContentItems + 'px';
    }
});

reviewsContentButtonsButtonLeft.addEventListener('click', () => {
    sliderPageOfPages.textContent = Number(sliderPageOfPages.textContent) - 1;
    positionReviewsContentItems += 1296;
    reviewsContentItems.style.left = positionReviewsContentItems + 'px';
    if(sliderPageOfPages.textContent < 1) {
        positionReviewsContentItems = -7776;
        sliderPageOfPages.textContent = 7;
        reviewsContentItems.style.left = positionReviewsContentItems + 'px';
    }
});
