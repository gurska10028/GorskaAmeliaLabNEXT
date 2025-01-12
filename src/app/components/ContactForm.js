export default function ContactForm() {
    return (
        <form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            maxWidth: '600px',
            margin: '0 auto',
            background: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <label style={{ color: '#1f2937' }}>
                Imię:
                <input
                    type="text"
                    name="name"
                    placeholder="Wpisz swoje imię"
                    style={{
                        padding: '10px',
                        border: '1px solid #e5e7eb',
                        borderRadius: '5px',
                        width: '100%',
                    }}
                />
            </label>
            <label style={{ color: '#1f2937' }}>
                Email:
                <input
                    type="email"
                    name="email"
                    placeholder="Wpisz swój email"
                    style={{
                        padding: '10px',
                        border: '1px solid #e5e7eb',
                        borderRadius: '5px',
                        width: '100%',
                    }}
                />
            </label>
            <label style={{ color: '#1f2937' }}>
                Wiadomość:
                <textarea
                    name="message"
                    placeholder="Wpisz swoją wiadomość"
                    rows="4"
                    style={{
                        padding: '10px',
                        border: '1px solid #e5e7eb',
                        borderRadius: '5px',
                        width: '100%',
                    }}
                ></textarea>
            </label>
            <button
                type="submit"
                style={{
                    padding: '12px 20px',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    textAlign: 'center',
                }}
            >
                Wyślij
            </button>
        </form>
    );
}
