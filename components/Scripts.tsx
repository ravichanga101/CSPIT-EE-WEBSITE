'use client';

import Script from 'next/script';

export default function Scripts() {
  return (
    <>
      {/* JavaScript Libraries */}
      {/* Load jQuery first as others depend on it */}
      <Script src="/lib/jquery/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/lib/jquery/jquery-migrate.min.js" strategy="afterInteractive" />
      <Script src="/lib/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/lib/easing/easing.min.js" strategy="afterInteractive" />
      <Script src="/lib/superfish/hoverIntent.js" strategy="afterInteractive" />
      <Script src="/lib/superfish/superfish.min.js" strategy="afterInteractive" />
      <Script src="/lib/wow/wow.min.js" strategy="afterInteractive" />
      <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/lib/magnific-popup/magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/lib/sticky/sticky.js" strategy="afterInteractive" />
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8HeI8o-c1NppZA-92oYlXakhDPYR7XMY" strategy="lazyOnload" />

      {/* Contact Form JavaScript File */}
      {/* Note: This file relies on the existence of the PHP backend which we are replacing with an API route. 
          We might need to patch this file to point to /api/contact instead of contactform.php */}
      <Script src="/contactform/contactform.js" strategy="afterInteractive" />

      {/* Template Main Javascript File */}
      <Script src="/js/main.js" strategy="lazyOnload" />

      {/* Inline Scripts from footer.php converted to Script tags or useEffect */}
      <Script id="owl-init" strategy="lazyOnload">
        {`
          $(document).ready(function() {
            // Specific carousels are defined in main.js
            
            // Custom Navigation Events if needed for other carousels
            var owl = $('.owl-carousel');
            $('.customNextBtn').click(function() {
                owl.trigger('next.owl.carousel');
            })
            $('.customPrevBtn').click(function() {
                owl.trigger('prev.owl.carousel', [300]);
            })
          })
        `}
      </Script>

      <Script id="nopaperforms-init" strategy="lazyOnload">
        {`
          var s=document.createElement("script");
          s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js";
          document.body.appendChild(s);
        `}
      </Script>

      {/* Script from header.php body */}
      <Script id="nopaperforms-track" strategy="afterInteractive">
        {`
          var npf_d='https://charusat.nopaperforms.com'; var npf_c='466'; var npf_m='1'; 
          var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://track.nopaperforms.com/js/track.js"; document.body.appendChild(s);
        `}
      </Script>
    </>
  );
}
