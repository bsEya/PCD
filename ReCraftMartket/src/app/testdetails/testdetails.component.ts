 import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-testdetails',
  templateUrl: './testdetails.component.html',
  styleUrls: ['./testdetails.component.css']
})
export class TestdetailsComponent implements OnInit {

  constructor() { }




  ngOnInit(): void {

    // $(".js-select2").each(() => {
    //   $(this).select2({
    //       minimumResultsForSearch: 20,
    //       dropdownParent: $(this).next('.dropDownSelect2')
    //   });
    // });

    // $('.parallax100').parallax100();

    // $('.gallery-lb').each(() => {
    //   $(this).magnificPopup({
    //       delegate: 'a',
    //       type: 'image',
    //       gallery: {
    //           enabled:true
    //       },
    //       mainClass: 'mfp-fade'
    //   });
    // });

    // $('.js-addwish-b2, .js-addwish-detail').on('click', (e: any) => {
    //   e.preventDefault();
    // });


  }
}
