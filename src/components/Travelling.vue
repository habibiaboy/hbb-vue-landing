<template>
    <section class="bg-light" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">My Trip</h2>
            <h3 class="section-subheading text-muted">Travel makes one modest. You see what a tiny place you occupy in the world</h3>
        
            <div class="line-mf" style="margin-top: -40px;margin-bottom: 20px;"></div>
            <!-- <div class="line-mf"></div> -->
          </div>
        </div>
        <div class="row">
          
            <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in mytripJSON" :key="key">
                <div class="work-box">
                    <div class="portfolio-caption">
                        <div class="work-img">
                            <img class="img-fluid" :src="obj.img">
                        </div>
                        <br>
                        <a class="portfolio-link" data-toggle="modal" :href="obj.modal">
                            <h4 class="w-title" style="color:#d19019">{{ obj.title }}</h4>
                        </a>
                        <p class="text-muted">{{ obj.year }}</p>
                    </div>
                </div>
            </div>
        </div>

        
        

      </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        mytripJSON: [
            {
                img: require('../assets/img/gunung/gunung-semeru.png'),
                caption: 'Explore',
                title: 'Mount Semeru',
                year: '06 Oct 2014',
                modal: '#portfolioModal1'
            },
            {
                img: require('../assets/img/gunung/gunung-andong.png'),
                caption: 'Explore',
                title: 'Mount Andong',
                year: '02 June 2015',
                modal: '#portfolioModal2'
            },
            {
                img: require('../assets/img/gunung/gunung-cikuray.png'),
                caption: 'Explore',
                title: 'Mount Cikuray',
                year: '19 November 2015',
                modal: '#portfolioModal3'
            },
            { 
                img: require('../assets/img/gunung/gunung-merbabu.png'),
                caption: 'Southwest',              
                title: 'Mount Merbabu',
                year: '23 January 2016',
                modal: '#portfolioModal4'
            },
            {
                img: require('../assets/img/gunung/gunung-gede.png'),
                caption: 'Gede',
                title: 'Mount Gede',
                year: '24 December 2017',
                modal: '#portfolioModal5'
            },
            {
                img: require('../assets/img/gunung/gunung-rinjani.png'),
                caption: 'Rinjani',
                title: 'Mount Rinjani' ,
                year: '04 May 2018',
                modal: '#portfolioModal6'
            }
        ]
    })
}
</script>

<style lang="css">

</style>


