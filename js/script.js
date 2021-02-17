// window.scroll({
//   top: 0,
//   left: 0,
//   behavior: 'smooth'
// });

var app = new Vue ({
  el: '#app',
  data: {
    header: ['sign in','about us','contact us','buy now'],
    mainMenu: ['home','elements','features','pages','portfolio','blog','shop'],
    photos: 'blog-4',
    slider: ['photography','gadgets','lifestyle','travel','recipes','fashion'],
    imgHeadline: ['How To Take Better Concert Pictures in 30 Seconds','Gadgets That Make Your Smartphone Even Smarter','20 Top-Rated Tourist Attractions in Manhattan','The Best Way to Ride a Motorcycle','5 Fun Things to Do at the Beach','Amazingly Fresh Fruit And Herb Drinks For Summer'],
    tags: ['design','brands','video','business','travel'],
    categories: ['business','architecture','reviews','sports','videos','technology','design'],
    footer: ['FAQs','Sitemap','Contact us'],
    arrConcatenato: ''
  },
  mounted(){
    this.arrConcatenato = this.joinArray(this.slider,this.categories);
    // console.log(this.arrConcatenato);
  },
  methods: {
    joinArray(arr1,arr2){
      let newArr = arr1.concat(arr2);
      return newArr;
    },
    prev(){
    },
    next(){

    }
  }
});
