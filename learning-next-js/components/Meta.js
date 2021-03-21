import Head from 'next/head'
const Meta = ({title, keywords, description}) => {
    return (
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="{title}" />
        <meta name="keywords" content="{keywords}" />
        <meta name="description" content="{description}" />
        <meta charSet='utf-8' />
        <meta rel='icon' href='/favicon.ico' />
        <title>{title}</title>
      </Head>
    )
}

Meta.defaultProps = {
    title: 'WedDev News',
    keywords: 'web development, programing',
    description: 'Get the latest news in web'
}

export default Meta
