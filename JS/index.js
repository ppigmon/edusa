// Splide for navigation
let splideNav = new Splide('#splide-nav', {
    arrows: false,
    pagination: false,
    perPage: 6,
    focus: 0,
    isNavigation: true,

}).mount()


// Splide for main content
let splideMain = new Splide('#splide-main', {
fixedHeight: "90vh",
drag: true,
rewind: true,
type: 'slide',
}).mount();



splideMain.sync(splideNav).mount();