// scripts.js

// Dados das vagas (simulação de um banco de dados)
const jobListings = [
    {
        id: 1,
        title: "Desenvolvedor Full Stack",
        description: "Desenvolver e manter aplicações web completas.",
        location: "São Paulo, SP",
        requirements: "Conhecimentos em HTML, CSS, JavaScript, Node.js, SQL."
    },
    {
        id: 2,
        title: "Designer UI/UX",
        description: "Criar designs atrativos e funcionais para web e mobile.",
        location: "Remoto",
        requirements: "Experiência com ferramentas de design como Figma ou Adobe XD."
    },
    {
        id: 3,
        title: "Analista de Marketing Digital",
        description: "Gerenciar campanhas de marketing digital.",
        location: "Rio de Janeiro, RJ",
        requirements: "Experiência em SEO, Google Ads e redes sociais."
    }
];

// Função para renderizar as vagas disponíveis
function displayJobs() {
    const jobsContainer = document.getElementById('jobs-container');
    jobsContainer.innerHTML = '';

    jobListings.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Local:</strong> ${job.location}</p>
            <p><strong>Descrição:</strong> ${job.description}</p>
            <p><strong>Requisitos:</strong> ${job.requirements}</p>
            <button onclick="applyForJob(${job.id})">Candidatar-se</button>
        `;
        jobsContainer.appendChild(jobCard);
    });
}

// Função para selecionar uma vaga e mostrar o formulário de candidatura
function applyForJob(jobId) {
    const selectedJob = jobListings.find(job => job.id === jobId);
    document.getElementById('selectedJob').value = selectedJob.title;
    document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
}

// Função para enviar a candidatura
document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const applicantName = document.getElementById('applicantName').value;
    const applicantEmail = document.getElementById('applicantEmail').value;
    const coverLetter = document.getElementById('coverLetter').value;
    const selectedJob = document.getElementById('selectedJob').value;

    if (!selectedJob) {
        alert('Por favor, selecione uma vaga antes de enviar a candidatura.');
        return;
    }

    const applicationData = {
        name: applicantName,
        email: applicantEmail,
        coverLetter: coverLetter,
        jobTitle: selectedJob
    };

    console.log('Candidatura enviada:', applicationData);

    alert(`Obrigado por se candidatar à vaga de ${selectedJob}, ${applicantName}!`);

    // Limpa o formulário após o envio
    document.getElementById('jobApplicationForm').reset();
    document.getElementById('selectedJob').value = '';
});

// Inicializa a página com as vagas
window.onload = displayJobs;
