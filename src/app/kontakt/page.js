import ContactForm from '../components/ContactForm';

export default function Page() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#1f2937' }}>Kontakt</h1>
            <p style={{ textAlign: 'center', marginBottom: '20px', color: '#4b5563' }}>
                Jeśli masz pytania, wypełnij poniższy formularz.
            </p>
            <ContactForm />
        </div>
    );
}
