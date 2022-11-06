import { HotelApp } from '../dsl/hotelApp';
import { HotelPageData } from '../data/HotelPageData';
const hotelApp = new HotelApp();
const hotelPageData = new HotelPageData();
var assert = require('assert');
describe('Verify functionality on hotel tab', () => {

  before(() => {
    hotelApp.openURL();
    hotelApp.navigateToHotelTab();
  });

  it('Verify User is able to click on hotel tab', () => {
    // hotelApp.navigateToHotelTab();
    expect(hotelApp.isHotelTabSelected()).toBe("true");
  });

  it('Verify Dates and Destination entered in Result Page are same as the ones as entered in Home Page', () => {

    // hotelApp.navigateToHotelTab();
    hotelApp.enterDestinationAndDates(hotelPageData.hotel.search.destination,
                                      hotelPageData.hotel.search.checkInDate,
                                      hotelPageData.hotel.search.checkOutDate,);
    hotelApp.searchForHotels();

    var hotelsResultCount = hotelApp.getHotelResultsCount();
    expect(hotelsResultCount).toContain("1 to 25");

    var hotelResults = hotelApp.getHotelResults();
    expect(hotelResults).toContain(hotelPageData.hotel.result.destination);
    expect(hotelResults).toContain(hotelPageData.hotel.result.checkInDate);
    expect(hotelResults).toContain(hotelPageData.hotel.result.checkOutDate);

  });

});
