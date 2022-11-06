
import { HotelPage } from '../pom/vacationsdirect/hotel.page';
import { HotelResultsPage } from '../pom/vacationsdirect/hotelResults.page';
import { LandingPage } from '../pom/vacationsdirect/landing.page';


export class HotelApp {
    public static CONTAINER_ID = Symbol.for('MobileMyTripsSiteApp');

    protected hotelPage = new HotelPage();
    protected hotelresultPage = new HotelResultsPage();
    protected landingPage = new LandingPage();


    openURL() {
        this.hotelPage.open();
    }

    navigateToHotelTab() {
        this.landingPage.clickOnHotelTab();
    }

    isHotelTabSelected(): string {
        return this.landingPage.isHotelTabSelected();
    }

    enterDestinationAndDates(destination: string, checkInDate: string, checkOutDate: string) {
        this.hotelPage.enterDestination(destination);
        this.hotelPage.enterCheckInDate(checkInDate);
        this.hotelPage.enterCheckOutDate(checkOutDate);
    }

    searchForHotels() {
        this.hotelPage.clickOnHotelSearchButton();
    }

    getHotelResultsCount(): string {
        return this.hotelresultPage.getHotelResultsCount();
    }

    getHotelResults(): string {
        return this.hotelresultPage.getHotelResultsInfo();
    }


}
