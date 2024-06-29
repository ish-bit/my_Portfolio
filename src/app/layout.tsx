import '../index.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
   <html lang="en">

<head>
  <link rel="icon" href="favicon.ico" />
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Web site created using create-react-app" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
 
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
 
  <title>Ishika Rastogi</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js"></script>
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">{children}</div>
  
</body>

</html>
    )
  }