import Card1 from 'assets/card1.png'
import Card2 from 'assets/card2.png'
import Card3 from 'assets/card3.png'

export const BANNER_MAIN = {
    header: `ACME Wealth
    Management Platforms`,
    subHeader: `Invest Excellence.
    Diversity of thought.
    Organizational Strength.`,
}

export const CARDS = {
    title: 'Acme Insights',
    subtitle: 'How are factors being used around the world?',
    cards: [
    {
        id: 1,
        text: `Global Factor
        Investing Study`,
        img: Card1,
        variant: 'primary'
    },
    {
        id: 2,
        text: `2019
        Outlook`,
        img: Card2,
        variant: 'contrast'
    },
    {
        id: 3,
        text: `Capital Market Assumptions`,
        img: Card3,
        variant: 'primary'
    } 
    ]
}

export const BANNER_WHOWEARE = {
    header: 'Our Commitment to Professionals',
    subHeader: 'We help our partners deliver industry leading results with a commitment to excellence, through provoking insights and experienced distribution. We are laser focused on our shared goal - helping clients achieve their objectives.'
}


export const EVENTS = {
    title: 'Upcoming Events',
    subtitle: 'Oops, Looks like this wasn\'t filled in. Looking forward for the great tagline.',
    cards: [
    {
        id: 1,
        date: 'Jan 28',
        title: 'Inisight Exchange Network',
        subtitle: 'Join us for this conference showcasing innovation.',
        link: '#',
        location: 'Chicago, IL'
    },
    {
        id: 2,
        date: 'Feb 12',
        title: 'City Wide Buyer\'s Retreat',
        subtitle: 'Find out how banks are responding to the changing future of interest...',
        link: '#',
        location: 'The Wagner, New York'
    },
    {
        id: 3,
        date: 'May 6',
        title: 'Research Exchange',
        subtitle: 'Find the best online resources to help with your investment...',
        link: '#',
        location: 'London, England'
    } 
    ]
}