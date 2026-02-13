import type { Metadata } from 'next'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AdmissionModal from '@/components/AdmissionModal';
import Scripts from '@/components/Scripts';

export const metadata: Metadata = {
    title: 'CSPIT - Electrical Engineering',
    description: '',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta content="" name="keywords" />
                <meta content="" name="description" />

                {/* Favicons */}
                <link href="/img/favicon.png" rel="icon" />
                <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />

                {/* Google Fonts */}
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800|Montserrat:300,400,700" rel="stylesheet" />

                {/* CSS Libraries */}
                <link href="/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
                <link href="/lib/animate/animate.min.css" rel="stylesheet" />
                <link href="/lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
                <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="/lib/magnific-popup/magnific-popup.css" rel="stylesheet" />

                {/* Main Stylesheet */}
                <link href="/css/style.css" rel="stylesheet" />

                {/* Additional Fonts */}
                <link href="https://fonts.googleapis.com/css?family=Noto+Serif" rel="stylesheet" />
            </head>
            <body id="body">
                <Navigation />
                <AdmissionModal />
                {children}
                <Footer />
                <Scripts />
            </body>
        </html>
    )
}
