$('.carousel').carousel({
	interval: false,
});

$(document).ready(function(){
	"use strict";


    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */



/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200,'easeInOutExpo');
		});
		
		$('body').scrollspy({
			target:'.navbar-collapse',
			offset:0
		});

	// 3. Progress-bar
	
		var dataToggleTooTip = $('[data-toggle="tooltip"]');
		var progressBar = $(".progress-bar");
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = $(this).attr('aria-valuenow');
					$(this).width(each_bar_width + '%');
				});
			});
		}
	
	// 4. owl carousel
	
		// i. client (carousel)
		
			$('#client').owlCarousel({
				items:7,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:true,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:4

						},
						1199:{
							items:4
						},
						1200:{
							items:7
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})


    // 5. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });

});	

var contentPortalSCF = "Aplikasi Portal SCF digunakan untuk monitoring limit kerjasama SCF per korporat dan reporting performance SCF.";
var contentECollection = "Aplikasi Mobile Collection digunakan untuk monitoring dan reporting aktivitas penagihan yang dilakukan oleh Field Collector.";
var contentPortalDGO = "Aplikasi Portal DGO digunakan untuk percepatan proses hasil/resume rekonsiliasi dari Unit Rekonsiliasi sampai fungsi settlement ke unit pembayaran dalam rangka penyelesaian pembukuan.";
var contentPosyanduLansia = "Aplikasi Posyandu Lansia digunakan untuk mempermudah kader posyandu dalam melakukan pencatatan data kesehatan lansia secara cepat dan lansia dapat melihat hasil pemeriksaan rutin setiap bulannya.";
var contentDJPInterop = "Aplikasi DJP Interop digunakan sebagai pemenuhan permintaan data serta pencatatan dan pelaporan pajak kepada DJP.";
var contentSKB = "Aplikasi SKB Online digunakan untuk mempermudah Unit Operasional dalam proses penerbitan SKB, proses otomasi layanan melalui Cabang dan Penyeragaman format penulisan SKB melalui Cabang/SKM/Divisi.";
var contentDashboardHukum = "Aplikasi Dashboard Hukum digunakan untuk monitoring data historis perkara debitur, calon debitur dan/atau pihak ketiga di BNI.";

const titlePortalSCF = "Portal SCF";
const titleECollection = "E-Collection";
const titlePortalDGO  = "Portal DGO";
const titlePosyanduLansia= "Posyandu Lansia";
const titleDJPInterop = "DJP Interop";
const tittleSKB = "SKB Online";
const titleDashboardHukum = "Dashboard Hukum";

function openView(about){
	if(about == 'portalscf'){
		$("#modal-content").html(contentPortalSCF);
		$("#exampleModalLongTitle").html(titlePortalSCF);

	}
	else if(about == 'ecollection'){
		$("#modal-content").html(contentECollection);
		$("#exampleModalLongTitle").html(titleECollection);

	}
	else if(about == 'portaldgo'){
		$("#modal-content").html(contentPortalDGO);
		$("#exampleModalLongTitle").html(titlePortalDGO);

	}
	else if(about == 'posyandulansia'){
		$("#modal-content").html(contentPosyanduLansia);
		$("#exampleModalLongTitle").html(titlePosyanduLansia);

	}
	else if(about == 'djpinterop'){
		$("#modal-content").html(contentDJPInterop);
		$("#exampleModalLongTitle").html(titleDJPInterop);

	}
	else if(about == 'skb'){
		$("#modal-content").html(contentSKB);
		$("#exampleModalLongTitle").html(tittleSKB);
	}

	else if(about == 'dashboardhukum'){
		$("#modal-content").html(contentDashboardHukum);
		$("#exampleModalLongTitle").html(titleDashboardHukum);

	}
	
  };

	