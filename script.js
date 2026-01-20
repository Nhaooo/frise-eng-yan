// Data - Rich content provided by user
const data = [
    {
        year: "1843",
        title: "Ada Lovelace",
        summary: "The First Programmer",
        details: "English mathematician and author Ada Lovelace is best known for her contributions to Charles Babbage's Analytical Engine, a mechanical general-purpose computer. She published the first algorithm designed to be executed by such a machine and was the first to realize that the machine had uses beyond simple computation. She is therefore frequently recognized as the first computer programmer and the first to realize the full potential of a computing machine.",
        mediaType: "image",
        mediaUrl: "images/Ada_Lovelace_Mindmap.png",
        secondMediaUrl: "images/cover-r4x3w1200-63ce8f5f81201-ada-lovelace-portrait.jpg",
        wikiUrl: "https://en.wikipedia.org/wiki/Ada_Lovelace",
        youtubeUrl: "https://youtu.be/uBbVbqRvqTM",
        tags: ["Pioneer", "Algorithms", "Mathematics"]
    },
    {
        year: "1936",
        title: "Alan Turing",
        summary: "Father of Modern CS",
        details: "Alan Turing was a mathematician who formalized the concepts of 'algorithm' and 'computation' with the Turing machine, which can be considered a model of a general-purpose computer. During the Second World War, he worked for the Government Code and Cypher School at Bletchley Park, Britain's codebreaking center, where he played a crucial role in cracking intercepted coded messages that enabled the Allies to defeat the Nazis. He is also a pioneer of LGBTQ+ rights and is known for his homosexuality.",
        mediaType: "video",
        mediaUrl: "images/tragedy-of-alan-turing_7hN6HBP8.mp4",
        posterUrl: "https://upload.wikimedia.org/wikipedia/commons/7/79/Alan_Turing_az_1930-as_%C3%A9vekben.jpg",
        wikiUrl: "https://en.wikipedia.org/wiki/Alan_Turing",
        youtubeUrl: "https://youtu.be/MidJR581irA",
        tags: ["Theory", "Cryptography", "AI"]
    },
    {
        year: "1943",
        title: "Colossus",
        summary: "First Electronic Computer",
        details: "Colossus was the world's first programmable, electronic, digital computer. It was a set of computers developed by British codebreakers in 1943-1945 to help in the cryptanalysis of the Lorenz cipher. Colossus used thermionic valves to perform Boolean and counting operations. It is often regarded as the first programmable, electronic, digital computer, although it was programmed by switches and plugs and not by a stored program.",
        mediaType: "image",
        mediaUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Colossus.jpg",
        wikiUrl: "https://en.wikipedia.org/wiki/Colossus_computer",
        youtubeUrl: "https://youtu.be/knXWMjIA59c",
        tags: ["Hardware", "WWII", "Engineering"]
    },
    {
        year: "1969",
        title: "ARPANET",
        summary: "Birth of the Internet",
        details: "The Advanced Research Projects Agency Network (ARPANET) was the first wide-area packet-switched network with distributed control and one of the first networks to implement the TCP/IP protocol suite. Both technologies became the technical foundation of the Internet. The first message was sent over the ARPANET in 1969 from computer science professor Leonard Kleinrock's laboratory at UCLA to the second network node at Stanford Research Institute.",
        mediaType: "image",
        mediaUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Arpanet_logical_map%2C_march_1977.png",
        wikiUrl: "https://en.wikipedia.org/wiki/ARPANET",
        youtubeUrl: "https://youtu.be/L4bJIGuQX40",
        tags: ["Network", "Defense", "Communication"]
    },
    {
        year: "1983",
        title: "TCP/IP",
        summary: "Language of the Internet",
        details: "On January 1, 1983, ARPANET officially changed its core networking protocol from NCP to TCP/IP. This day is often considered the official birthday of the Internet. The TCP/IP protocols were developed by Vint Cerf and Bob Kahn and defined how data should be packetized, addressed, transmitted, routed, and received. This allowed different kinds of networks to connect to one another, creating a true global network of networks.",
        mediaType: "image",
        mediaUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/IP_stack_connections.svg",
        secondMediaUrl: "images/tcp_ip_creators.jpg",
        wikiUrl: "https://en.wikipedia.org/wiki/Transmission_Control_Protocol",
        youtubeUrl: "https://youtu.be/PpsEaqJV_A0",
        tags: ["Protocol", "Standard", "Connectivity"]
    },
    {
        year: "1989",
        title: "World Wide Web",
        summary: "The Web is Born",
        details: "Tim Berners-Lee, a British scientist, invented the World Wide Web (WWW) in 1989 while working at CERN. The web was originally conceived and developed to meet the demand for automated information-sharing between scientists in universities and institutes around the world. He wrote the first web client and server in 1990. His specifications of URIs, HTTP, and HTML were refined as web technology spread.",
        mediaType: "image",
        mediaUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d1/First_Web_Server.jpg",
        secondMediaUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg",
        wikiUrl: "https://en.wikipedia.org/wiki/World_Wide_Web",
        youtubeUrl: "https://youtu.be/J8hzJxb0rpc",
        tags: ["Web", "Information", "Global"]
    },
    {
        year: "2004",
        title: "Social Networks",
        summary: "Connecting the World",
        details: "The mid-2000s saw the rise of modern social networking services like Facebook, expanding on earlier concepts like Friendster and MySpace. These platforms fundamentally changed how people communicate, share information, and form communities online. They introduced the concept of the 'social graph'—mapping the interconnections among people, groups, and organizations—and ushered in the era of Web 2.0, characterized by user-generated content.",
        mediaType: "image",
        mediaUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png",
        wikiUrl: "https://en.wikipedia.org/wiki/Social_networking_service",
        youtubeUrl: "https://youtu.be/bNuosP8ty1E",
        tags: ["Social", "Web 2.0", "Community"]
    },
    {
        year: "2007",
        title: "First Smartphone",
        summary: "The iPhone Revolution",
        details: "In 2007, Steve Jobs introduced the original iPhone, a device that combined a mobile phone, a widescreen iPod with touch controls, and a breakthrough Internet communications device. It revolutionized the smartphone industry by replacing physical keyboards with a multi-touch interface. The launch of the App Store the following year created a massive new economy for mobile software development.",
        mediaType: "image",
        mediaUrl: "images/steve_jobs_iphone.jpg",
        wikiUrl: "https://en.wikipedia.org/wiki/IPhone",
        youtubeUrl: "https://youtu.be/_NE1hp_uDT0",
        tags: ["Mobile", "Apple", "Innovation"]
    },
    {
        year: "2012",
        title: "Deep Learning",
        summary: "AI Breakthrough",
        details: "Deep learning, a subset of machine learning based on artificial neural networks, began to achieve superhuman performance in pattern recognition tasks. In 2012, a deep convolutional neural network named AlexNet achieved a top-5 error of 15.3% in the ImageNet Large Scale Visual Recognition Challenge, more than 10.8 percentage points lower than the runner-up. This moment is often cited as the catalyst for the current AI boom.",
        mediaType: "image",
        mediaUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Artificial_neural_network.svg",
        wikiUrl: "https://en.wikipedia.org/wiki/Deep_learning",
        youtubeUrl: "https://youtu.be/qYNweeDHiyU",
        tags: ["AI", "Neural Networks", "Data"]
    },
    {
        year: "2022",
        title: "Generative AI",
        summary: "ChatGPT & Multimodal",
        details: "OpenAI launched ChatGPT in November 2022, a chatbot built on top of the GPT-3.5 family of large language models. This marked a significant milestone in generative AI, demonstrating the ability of AI to generate human-like text, answer questions, and assist with creative tasks. It sparked a global conversation about the future of work, creativity, and the ethical implications of artificial intelligence.",
        mediaType: "image",
        mediaUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        wikiUrl: "https://en.wikipedia.org/wiki/Generative_artificial_intelligence",
        youtubeUrl: "https://youtu.be/NRmAXDWJVnU",
        tags: ["GenAI", "LLMs", "Future"]
    }
];

const timelineRoot = document.getElementById('timeline-root');
const modal = document.getElementById('infoModal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

// Generative Logic
data.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'timeline-item';

    // Create HTML Structure
    const tagsHtml = item.tags.map(t => `<span class="tag">${t}</span>`).join('');

    // Thumbnail Logic (Simplified for card, detailed for modal)
    let thumb = '';
    if (item.mediaType === 'image') {
        thumb = `<img src="${item.mediaUrl}" alt="${item.title}" style="width:100%; height:120px; object-fit:cover; border-radius:5px; margin-top:10px;">`;
    } else if (item.mediaType === 'video') {
        // Fix: Use posterUrl for thumbnail if available, or generic placeholder
        const poster = item.posterUrl ? item.posterUrl : '';
        if (poster) {
            thumb = `<div style="position:relative; width:100%; height:120px; margin-top:10px;">
                        <img src="${poster}" style="width:100%; height:100%; object-fit:cover; border-radius:5px;">
                        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); color:white; font-size:24px; text-shadow:0 0 5px black;">▶</div>
                     </div>`;
        } else {
            thumb = `<div style="width:100%; height:120px; background:#000; border-radius:5px; margin-top:10px; display:flex; align-items:center; justify-content:center; color:white;">▶ Video</div>`;
        }
    }

    el.innerHTML = `
        <div class="dot"></div>
        <div class="content">
            <span class="year-badge">${item.year}</span>
            <div class="tags">${tagsHtml}</div>
            <h2>${item.title}</h2>
            <p class="summary">${item.summary}</p>
            ${thumb}
        </div>
    `;

    // Click for details
    el.addEventListener('click', () => {
        // Prepare Media for Modal
        let mediaContent = '';
        if (item.mediaType === 'image') {
            if (item.secondMediaUrl) {
                // Two images
                mediaContent = `
                    <div style="display:flex; gap:10px; margin: 15px 0;">
                        <img src="${item.mediaUrl}" style="width:50%; border-radius:8px;">
                        <img src="${item.secondMediaUrl}" style="width:50%; border-radius:8px;">
                    </div>
                `;
            } else {
                mediaContent = `<img src="${item.mediaUrl}" style="width:100%; max-height:200px; object-fit:contain; margin: 10px 0; border-radius:8px;">`;
            }
        } else if (item.mediaType === 'video') {
            mediaContent = `
                <video controls style="width:100%; max-height:200px; margin: 10px 0; border-radius:8px;" poster="${item.posterUrl || ''}">
                    <source src="${item.mediaUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        }

        modalText.innerHTML = `
            <div style="border-bottom: 2px solid var(--accent); padding-bottom:10px; margin-bottom:15px;">
                <h2 style="margin:0; color:var(--primary); font-size:1.6rem;">${item.year} - ${item.title}</h2>
                <div style="margin-top:5px; display:flex; gap:5px;">${tagsHtml}</div>
            </div>
            
            <p style="font-size:1rem; font-weight:bold; color:#555; margin: 10px 0;">${item.summary}</p>
            <p style="font-size:0.95rem; line-height:1.5; color:#444; margin:0;">${item.details}</p>
            
            ${mediaContent}
            
            <div style="margin-top:20px; text-align:center;">
                ${item.youtubeUrl ? `<a href="${item.youtubeUrl}" target="_blank" class="youtube-btn">▶ Watch Video</a>` : ''}
                <a href="${item.wikiUrl}" target="_blank" class="wiki-btn">Read more on Wikipedia</a>
            </div>
        `;
        modal.style.display = 'flex';
    });

    timelineRoot.appendChild(el);
});

// Modal Logic
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => {
    if (e.target == modal) modal.style.display = 'none';
};

// Canvas Background (Simple Particles)
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 50; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ddd';

    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(animate);
}
animate();

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
