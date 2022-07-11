import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html lang='en'>
            <Head>
                <meta charSet='utf-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content='PWA App' />

                <meta name='theme-color' content='#5b21b6' />
                <meta name='apple-mobile-web-app-status-bar' content='#5b21b6' />

                <link rel='shortcut icon' href='/favicon.ico' />
                <link rel='icon' href='/favicon.ico' />

                <link rel='icon' type='image/png' sizes='192x192' href='/logo-192x192.png' />
                <link rel='icon' type='image/png' sizes='512x512' href='/logo-512x512.png' />
                <link rel='apple-touch-icon' sizes='192x192' href='/logo-192x192.png' />
                <link rel='apple-touch-icon' sizes='512x512' href='/logo-512x512.png' />

                <link rel='manifest' href='/manifest.json' />

                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={true} />
                <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap' rel='stylesheet' />

                <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "d78873af07d641f0bf0d5e18b105fcd0"}'></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document