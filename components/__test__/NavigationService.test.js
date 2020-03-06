import NavigationService from '../NavigationService';

describe('NavigationService', () => {
    const navRef = jest.fn()

    it('sets TopLevelNavigator', () => {
        NavigationService.setTopLevelNavigator(navRef);
        expect(NavigationService.getTopLevelNavigator()).toBe(navRef);
    });
});