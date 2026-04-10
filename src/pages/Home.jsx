import React, { useMemo, useEffect } from "react"; // Añadimos useEffect
import { useNavigate, useLocation } from "react-router-dom"; // Añadimos useLocation
import "../styles/home.css";

// Define la data de tus artículos aquí
// Esta data es la misma que ya tenías, pero es importante que esté presente en el componente
// si no estás pasando los artículos como props desde un componente superior como App.js o Layout.js
const articles = [
    {
        id: '1',
        title: 'Why Homework and Study Matter: Keys to Academic Success',
        subtitle: 'Discover how doing homework and studying regularly can improve school performance and build lifelong skills.',
        author: 'CREAR News Team',
        category: 'Announcements',
        tags: ['homework', 'studying', 'academic habits', 'student life', 'learning'],
        slug: 'why-homework-and-study-matter',
        imageUrl: 'https://i.pinimg.com/originals/4e/9d/87/4e9d87f8022d47f7cae6012efc96bb82.gif',
        date: 'June 19, 2025',
        fullArticleHtml: `<h1 class="article-full-title">Why Homework and Study Matter: Keys to Academic Success</h1><p class="article-full-meta"><strong>By CREAR News Team</strong> | <em>June 2025</em></p><p class="article-full-paragraph">Homework and studying are essential parts of student life. While some students may not always enjoy them, they play a big role in helping learners understand new topics, prepare for tests, and become responsible individuals. Doing homework and reviewing lessons at home is more than just a task—it’s an important habit that leads to better academic results and a deeper understanding of subjects.</p><p class="article-full-paragraph">From elementary school to high school, students are expected to practice what they learn in class. Homework reinforces learning and gives students time to think about what they studied during the day. It helps them discover their doubts, practice key concepts, and develop skills like time management, independence, and responsibility.</p><h3 class="article-full-heading">📚 Reinforcing Knowledge Outside the Classroom</h3><p class="article-full-paragraph">Learning doesn’t end when the school bell rings. Homework allows students to continue the learning process at home. By solving problems, reading, or writing at home, students can strengthen what they learned in class and improve their memory. When students review lessons regularly, they are more likely to retain information and feel confident during exams.</p><p class="article-full-paragraph">For example, practicing math problems at home can help students better understand formulas. Reading stories or articles improves vocabulary and reading comprehension. Writing essays allows them to express their thoughts more clearly and develop writing skills.</p><h3 class="article-full-heading">📝 Studying Smart: Preparing for Exams</h3><p class="article-full-paragraph">Exams are a part of every student’s academic journey. Studying helps students prepare and feel ready for these challenges. Without proper study habits, even intelligent students can struggle in tests. Studying regularly reduces stress, improves focus, and leads to higher scores.</p><p class="article-full-paragraph">Students who study a little bit every day often perform better than those who try to memorize everything the night before. This method, called "spaced repetition," helps the brain absorb and store information more effectively. Creating flashcards, reviewing class notes, and testing oneself are great techniques to study smarter, not harder.</p><img src="https://i.pinimg.com/736x/ba/6a/2a/ba6a2a493f3d0ccac63c36572cfdbb76.jpg" alt="Student studying with books" class="article-full-image" loading="lazy" data-ai-hint="student doing homework and studying for exam" /><h3 class="article-full-heading">⏳ Building Discipline and Responsibility</h3><p class="article-full-paragraph">Doing homework regularly also helps students develop important life skills. Time management is one of them. Knowing how to plan time between school, homework, and personal activities is a valuable skill for the future. Completing homework on time teaches responsibility and builds confidence in students’ abilities.</p><p class="article-full-paragraph">Additionally, when students complete their tasks without being reminded, they feel proud of their work. It teaches them the value of consistency and discipline. These are skills that not only help in school but also in future jobs and everyday life.</p><h3 class="article-full-heading">🎯 Conclusion: Strong Habits Lead to Strong Results</h3><p class="article-full-paragraph">Homework and studying are not just tasks from teachers—they are tools for success. When students make these practices part of their routine, they gain more than good grades. They become more organized, confident, and prepared for the future.</p><p class="article-full-paragraph">So remember, even a few minutes of homework or review each day can make a big difference. Good habits today build great achievements tomorrow!</p><hr class="article-full-divider" /><div class="article-full-footer">
  <p><strong>Author:</strong> CREAR News Team</p>
  <p><strong>Category:</strong> Announcements</p>
  <p><strong>Published:</strong> June 2025</p>
  <p class="Tags">homework, studying, academic habits, student life, learning</p>
  <p class="article-full-summary">
    <strong>AI Generated Summary:</strong> Homework and studying are crucial for academic success, reinforcing knowledge, preparing for exams, and building essential life skills like time management and responsibility. Consistent effort in these areas leads to better understanding, improved performance, and increased confidence, ultimately preparing students for future success.
  </p></div>`
    },

    {
        id: '3',
        title: 'The Rise of AI in Education: Opportunities and Challenges',
        subtitle: 'How artificial artificial intelligence is transforming learning and what it means for students and teachers.',
        author: 'Tech Innovators Group',
        category: 'Technology',
        tags: ['AI', 'education', 'technology', 'future of learning'],
        slug: 'ai-in-education',
        imageUrl: 'https://i.pinimg.com/originals/59/34/6b/59346b4b5c80cc5cf0c483a27dfdcb36.gif',
        date: 'June 17, 2025',
        fullArticleHtml: `<h1 class="article-full-title">The Rise of AI in Education: Opportunities and Challenges</h1><p class="article-full-meta"><strong>By Tech Innovators Group</strong> | <em>June 2025</em></p><p class="article-full-paragraph">Artificial intelligence is rapidly changing many aspects of our lives, and education is no exception. From personalized learning platforms to automated grading, AI offers exciting opportunities to enhance the learning experience.</p><p class="article-full-paragraph">However, with these opportunities come challenges. Ensuring equitable access to AI tools, maintaining human connection in the classroom, and addressing ethical concerns are crucial as we integrate AI into educational settings.</p><img src="https://i.pinimg.com/736x/8e/71/61/8e71618a8d16719e78262a4d93f77341.jpg" alt="AI in education" class="article-full-image" loading="lazy" /><p class="article-full-paragraph">AI can help teachers identify student learning gaps, provide immediate feedback, and even create custom learning paths. For students, it can offer 24/7 tutoring, access to vast amounts of information, and tools for creative expression.</p><p class="article-full-paragraph">As we move forward, a balanced approach is necessary. AI should be seen as a tool to assist and augment, not replace, human teachers. The goal is to leverage AI's power to create more effective, engaging, and accessible educational environments for everyone.</p><div class="article-full-footer">
  <p><strong>Author:</strong> Tech Innovators Group</p>
  <p><strong>Category:</strong> Technology</p>
  <p class="Published">June 2025</p>
  <p class="Tags">AI, education, technology, future of learning</p>
</div>`
    },
    // NUEVA NOTICIA 1: Mascota de Primaria
    {
        id: '4',
        title: 'My Friend Noah',
        subtitle: 'A sweet story about a special friend from one of our youngest students.',
        author: 'Martin Moreno Uriza, Grado 2°',
        category: 'Primary',
        tags: ['pets', 'dogs', 'students'],
        slug: 'my-friend-noah',
        imageUrl: 'https://i.pinimg.com/1200x/df/14/ba/df14ba2c59531aed803a2a7c94b3f9a4.jpg',
        date: 'July 31, 2025',
    },
    // NUEVA NOTICIA 2: Historieta
    {
        id: '5',
        title: 'A Day at CREAR: A Comic Strip',
        subtitle: 'An illustrated look at school life through the creative eyes of a 7th grader.',
        author: 'Mariana Valentina Gutiérrez, Grado 7°',
        category: 'Creative Corner',
        tags: ['comic', 'art', 'school life'],
        slug: 'a-day-at-crear-comic',
        imageUrl: 'https://i.pinimg.com/736x/68/83/f1/6883f148162a78fc047a767a1b2525a0.jpg',
        date: 'July 30, 2025',
    },
    // NUEVA NOTICIA 3: Table Tennis
    {
        id: '6',
        title: 'CREAR Table Tennis Championship',
        subtitle: 'Highlights from the exciting matches and the champion of our latest tournament.',
        author: 'María Paula Mancipe, Grado 7°',
        category: 'Sports',
        tags: ['table tennis', 'sports', 'championship'],
        slug: 'table-tennis-championship',
        imageUrl: 'https://i.pinimg.com/1200x/0d/c0/b3/0dc0b3d88152ab3de8733b48cad928f9.jpg',
        date: 'July 29, 2025',
    },
    // NUEVA NOTICIA 4: Video de Cocina
    {
        id: '7',
        title: 'Cooking Corner: How to Prepare a Lemonade',
        subtitle: 'Chef Ángel shows us how to make a refreshing lemonade for a sunny day.',
        author: 'Ángel Tomás González, Grado 7°',
        category: 'Cooking',
        tags: ['recipes', 'cooking', 'tutorial'],
        slug: 'how-to-prepare-a-limonade',
        imageUrl: 'https://i.pinimg.com/736x/b5/d9/72/b5d972d8c6dfacb37ff516f3d86d3f8c.jpg',
        date: 'July 28, 2025',
    },
    // NUEVA NOTICIA 5: Animación
    {
        id: '8',
        title: 'Student Spotlight: Creative Animation by Sara',
        subtitle: 'A visually stunning animation created by our talented student, Sara Daniela Pineda.',
        author: 'Sara Daniela Pineda, Grado 7°',
        category: 'Arts & Culture',
        tags: ['animation', 'creative', 'art'],
        slug: 'creative-animation-sara',
        imageUrl: 'https://i.pinimg.com/736x/68/83/f1/6883f148162a78fc047a767a1b2525a0.jpg',
        date: 'July 27, 2025',
    },

    // NUEVA NOTICIA 6
    {
        id: '9',
        title: 'The Crying Woman',
        subtitle: 'A story of myth and legend told by one of our students from fifth grade.',
        author: 'Aylin Bautista, Grado 5°',
        category: 'Myths & Legends',
        tags: ['myth', 'legend', 'story', 'horror'],
        slug: 'the-crying-woman',
        imageUrl: 'https://i.pinimg.com/736x/15/9c/a0/159ca059c7ce1cabf4e1084f33afba39.jpg',
        date: 'August 29, 2025',
    },
    // NUEVA NOTICIA 7
    {
        id: '10',
        title: 'My Favorite Day',
        subtitle: 'A personal story about a fan meeting their favorite YouTuber, a day full of emotions.',
        author: 'Samaira Muentes, Grado 5°',
        category: 'Personal Stories',
        tags: ['concert', 'youtuber', 'favorite day', 'story'],
        slug: 'my-favorite-day',
        imageUrl: 'https://i.pinimg.com/736x/4c/8b/f6/4c8bf68008c268ab41a2b0380d07a19b.jpg',
        date: 'August 29, 2025',
    },
    // NUEVA NOTICIA 8
    {
        id: '11',
        title: 'Why Do Women Take Longer When Shopping?',
        subtitle: 'An interesting theory about why women take longer to shop, based on ancient history.',
        author: 'Mathias Manjarrez, Grado 3°',
        category: 'Fun Facts',
        tags: ['shopping', 'history', 'fun facts', 'theory'],
        slug: 'why-women-take-longer-shopping',
        imageUrl: 'https://i.pinimg.com/736x/3a/fa/c6/3afac6dca52ff933c58e5591259c609d.jpg',
        date: 'August 29, 2025',
    },
    {
        id: '12',
        title: 'VINTAGE CAPS',
        subtitle: 'Explore the history, culture, and value behind the vintage caps movement, from its origins in the 80s to the collector community in Colombia.',
        author: 'Laura Valentina Forero Ballesteros',
        category: 'Lifestyle',
        tags: ['vintage', 'caps', 'collectors', 'fashion', 'Colombia', 'hip-hop'],
        slug: 'vintage-caps-culture',
        imageUrl: 'https://i.pinimg.com/1200x/a4/a1/98/a4a198459016a5edbf71796753f93a1f.jpg',
        date: 'August 30, 2025',
    },

    {
    id: '13',
    title: 'CREACIONES CÓMICAS: LA IMAGINACIÓN DE TRANSICIÓN',
    subtitle: 'Una colección de historietas únicas, llenas de creatividad y humor, contadas por Niños de Transición.',
    author: 'Transición',
    category: 'Historietas Hechas por Niños',
    tags: ['dibujo', 'infantil', 'creatividad', 'humor', 'escuela', 'historietas'],
    slug: 'historietas-creadas-por-ninos-transicion',
    imageUrl: 'https://i.pinimg.com/736x/6f/5e/58/6f5e58a3611e0100a79479d1c24c703d.jpg', 
    date: 'September 30, 2025',
    },
    {
        id: '14',
        title: 'CLEAN HANDS, HEALTHY LIFE',
        subtitle: 'The origin, importance, and simple formula to create your own disinfectant gel at home.',
        author: 'Dylan Galindo, Matias Rodriguez, Victoria Torres, Juan Pablo Medina Doncel',
        category: 'Science and Health',
        tags: ['hygiene', 'health', 'science', 'experiment', 'pandemic', 'alcohol', 'gel'],
        slug: 'the-power-of-antibacterial-gel-formula-and-history',
        imageUrl: 'https://i.pinimg.com/1200x/b0/17/45/b01745dcce6b1428f99c6673b47613b3.jpg', 
        date: 'October 16, 2025',
    },
    {
        id: '15',
        title: 'CHINESE NEW YEAR 2026: A JOURNEY OF DRAGONS AND TRADITION',
        subtitle: 'Relive the vibrant celebration where our community embraced ancient culture through art and joy.',
        author: 'Colegio CREAR Editorial',
        category: 'Announcements',
        tags: ['Chinese New Year', 'culture', 'celebration', 'tradition'],
        slug: 'chinese-new-year-celebration-crear-2026',
        imageUrl: 'https://i.pinimg.com/736x/81/b7/71/81b771b77f41c485b4c83a42b4e74449.jpg', 
        date: 'February 26, 2026',
    },
    {
        id: '16',
        title: 'Mundo digital: acompañar para proteger',
        subtitle: 'La importancia de la supervisión activa y el diálogo familiar en el uso de tecnologías y redes sociales.',
        author: 'Departamento de Orientación - Colegio CREAR',
        category: 'Announcements',
        tags: ['seguridad digital', 'familia', 'prevención', 'redes sociales', 'educación'],
        slug: 'mundo-digital-acompanar-para-proteger',
        imageUrl: 'https://i.pinimg.com/736x/ff/63/dd/ff63dd3fe2ee62c6e2b7da526223ee0a.jpg', 
        date: 'March 04, 2026',
    },
    {
        id: '17',
        title: 'WOMEN’S DAY: ART FOR EQUALITY',
        subtitle: 'Our students express the importance of gender equality and women’s rights through representative drawings.',
        author: 'Nicolás Gómez, Aaron Páez, Silvana Cruz, Nicolás Moreno Méndez',
        category: 'Arts & Culture',
        tags: ['Women’s Day', 'equality', 'art', 'student work', 'empowerment'],
        slug: 'womens-day-art-for-equality-2026',
        imageUrl: 'https://i.pinimg.com/1200x/fa/b0/ec/fab0ecd64dcf26b9355a74e067bc5deb.jpg', 
        date: 'March 08, 2026',
    },
    {
    id: '18',
    title: 'VOICES FOR EQUALITY: PERSPECTIVES FROM OUR STUDENTS',
    subtitle: 'Students from different grades share reflections, poems, and essays about the historical struggle for gender rights.',
    author: 'Martín Rubiano, Maria Jose Giraldo, Alejandra Leon, Sophie Escobar',
    category: 'Education & Society',
    tags: ['Women’s Day', 'Gender Equality', 'Student Voices', 'Reflection'],
    slug: 'voices-for-equality-student-perspectives-2026',
    imageUrl: 'https://i.pinimg.com/736x/5e/ae/b4/5eaeb4c172d5f57e8a40e0761431464c.jpg',
    date: 'March 10, 2026',
},
];

export const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // LEER EL FILTRO DE LA URL
    const queryParams = new URLSearchParams(location.search);
    const filter = queryParams.get("filter") || "TODOS";

    const filteredArticles = useMemo(() => {
        const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
        
        if (filter === "TODOS") return sorted;
        
        return sorted.filter(art => {
            const cat = art.category.toUpperCase();
            if (filter === "NOTICIAS") {
                return ["ANNOUNCEMENTS", "TECHNOLOGY", "SCIENCE AND HEALTH", "FUN FACTS"].includes(cat);
            }
            if (filter === "CULTURA") {
                return ["CREATIVE CORNER", "ARTS & CULTURE", "MYTHS & LEGENDS", "PERSONAL STORIES", "COOKING", "HISTORIETAS HECHAS POR NIÑOS", "PRIMARY", "LIFESTYLE"].includes(cat);
            }
            if (filter === "DEPORTES") {
                return cat === "SPORTS";
            }
            return false;
        });
    }, [filter]);

    const featuredArticle = filteredArticles[0];
    const otherArticles = filteredArticles.slice(1);

    const handleReadMore = (slug) => {
        navigate(`/details/${slug}`);
    };

    return (
        <main className="home-wrapper">
            <header className="section-header">
                <h1 className="main-headline">
                    {filter === "TODOS" ? "Periódico Escolar CREAR" : filter}
                </h1>
            </header>

            <div className="newspaper-layout">
                {featuredArticle ? (
                    <section 
                        className="hero-section" 
                        onClick={() => handleReadMore(featuredArticle.slug)}
                    >
                        <div className="hero-grid">
                            <div className="hero-image-container">
                                <img 
                                    src={featuredArticle.imageUrl} 
                                    alt={featuredArticle.title} 
                                    className="hero-main-image"
                                />
                                <span className="floating-badge">{featuredArticle.category}</span>
                            </div>
                            <div className="hero-text">
                                <span className="hero-eyebrow">ÚLTIMA NOTICIA</span>
                                <h2>{featuredArticle.title}</h2>
                                <p className="hero-description">{featuredArticle.subtitle}</p>
                                <div className="hero-meta">
                                    <span className="author">Por {featuredArticle.author}</span>
                                    <span className="dot"></span>
                                    <span className="date">{featuredArticle.date}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <div className="no-results">No se encontraron artículos en la sección {filter}.</div>
                )}

                <hr className="editorial-divider" />

                <section className="articles-grid">
                    {otherArticles.map(article => (
                        <article 
                            key={article.id} 
                            className="mini-card"
                            onClick={() => handleReadMore(article.slug)}
                        >
                            <div className="mini-img">
                                <img src={article.imageUrl} alt={article.title} />
                            </div>
                            <div className="mini-content">
                                <span className="mini-category">{article.category}</span>
                                <h3 className="mini-title">{article.title}</h3>
                                <p className="mini-excerpt">{article.subtitle}</p>
                                <div className="mini-meta">
                                    <span className="mini-date">{article.date}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default Home;