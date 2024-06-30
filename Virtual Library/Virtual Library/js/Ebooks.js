document.addEventListener('DOMContentLoaded', () => {
    const books = [
        {
            title: 'The Kite Runner',
            description: 'A coming-of-age story set in Afghanistan, exploring themes of friendship, betrayal, guilt, and redemption.',
            image: 'image/the-kite-runner.jpg', // Add path to the image
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/the-kite-runner-pdf-by-indianpdf.com_.pdf' // Add S3 URL
        },
        {
            title: 'Atomic Habits',
            description: '"Atomic Habits" offers a practical guide to building good habits and breaking bad ones through small, incremental changes.',
            image: 'image/atomic-habits.jpeg', // Add path to the image
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Atomic+Habits.pdf' // Add S3 URL
        },
        {
            title: 'Eat that Frog',
            description: '"Eat That Frog" emphasizes tackling your most challenging task first for a productive and fulfilling day.',
            image: 'image/eat-that-frog.jpeg', // Add path to the image
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Eat-that-frog-by-brian-tracy-pdf-book.pdf' // Add S3 URL
        },
        {
            title: 'How to win Friends and Influence people',
            description: '"Dale Carnegie,s" classic offers advice on building positive relationships and persuasion through empathy and effective communication.',
            image: 'image/how to win.jpeg', // Add path to the image
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/how-to-win-friends-and-influence-people.pdf' // Add S3 URL
        },
        {
            title: 'Ikigai',
            description: '"Ikigai" by Hector Garcia and Francesc Miralles delves into the Japanese concept of finding one,s life purpose, offering insights into longevity, happiness, and the pursuit of meaningful existence through practical guidance and philosophical reflections.',
            image: 'image/ikigai.jpeg', // Add path to the image
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Ikigai.pdf' // Add S3 URL
        },
        {
            title: 'Man,s Search For a Meaning',
            description: 'Viktor Frankl explores finding purpose and meaning in life, even amidst suffering, based on his experiences in Nazi concentration camps.',
            image: 'image/man search.jpeg', // Add path to the image
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Mans+Search+for+Meaning+-+Viktor+E.+Frankl+%5BWorldfreebooks.com%5D.pdf' // Add S3 URL
        },
        {
            title: 'Power of your Subconscious mind',
            description: 'Joseph Murphy,s book suggests harnessing the subconscious mind,s power for positive change and achieving your goals.',
            image: 'image/power of subconscious mind.jpeg', // Add path to the image
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/power-subconscious-mind.pdf' // Add S3 URL
        },
        {
            title: 'Rich dad Poor dad',
            description: '"Rich Dad Poor Dad" contrasts two financial mindsets, advocating financial literacy and building wealth through assets and investing.',
            image: 'image/rich-dad-poor-dad.jpeg', // Add path to the image
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Rich+Dad+Poor+Dad.pdf' // Add S3 URL
        },
        {
            title: 'Sapiens - a brief history of mankind',
            description: 'Yuval Noah Harari explores humanity,s rise from insignificant animal to dominant species through cooperation and unique cognitive abilities.',
            image: 'image/sapiens.jpeg', // Add path to the image
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Sapiens-A-Brief-History-of-Humankind.pdf' // Add S3 URL
        },
        {
            title: 'The subtle art of not giving a Fu*k',
            description: 'Mark Manson,s book challenges traditional self-help by arguing that focusing on what truly matters allows for happiness and personal growth.',
            image: 'image/subtle art.jpeg', // Add path to the image
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/the+subtle+art+of+not+giving+a+fuck.pdf' // Add S3 URL
        },
        {
            title: 'The 48 Laws of Power',
            description: '"The 48 Laws of Power" by Robert Greene offers ruthless tactics for navigating social hierarchies and gaining influence.',
            image: 'image/Power 48 laws.png', // Add path to the image
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/The-48-Laws-of-Power-Robert-Greene.pdf' // Add S3 URL
        },
        {
            title: 'Think and Grow rich',
            description: 'Napoleon Hill,s "Think and Grow Rich" emphasizes the power of desire, belief, and persistence in achieving financial success.',
            image: 'image/think and grow rich.jpeg', // Add path to the image
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Think-And-Grow-Rich_2011-06.pdf' // Add S3 URL
        },

        // Add more books here
    ];

    const bookList = document.getElementById('book-list');

    let currentPage = 1

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'swiper-slide box';

        bookItem.innerHTML = `
            <div class="icons">
                <a href="${book.fileUrl}" class="fas fa-download" download></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="content">
                <h3>${book.title}</h3>
                <p>${book.description}</p>
                <a href="${book.fileUrl}" class="btn" download>Download</a>
            </div>
        `;

        bookList.appendChild(bookItem);
    });

    const swiper = new Swiper('.swiper-container', {
        navigation: {
            slidesPerView: 'auto',
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            reachEnd: function () {
                currentPage++;
                loadBooks(currentPage); // Load more books on reach end
            }
        }
    });
});
