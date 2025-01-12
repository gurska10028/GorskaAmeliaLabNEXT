import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            background: '#1f2937',
            color: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
            <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/o-mnie" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>
                    O mnie
                </Link>
                <Link href="/zainteresowania" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>
                    Zainteresowania
                </Link>
                <Link href="/ulubiony-film" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>
                    Ulubiony film
                </Link>
                <Link href="/kontakt" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>
                    Kontakt
                </Link>
            </div>
            <div>
                <img
                    src="/favicon.ico"
                    alt="Ikona strony"
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid #fff',
                    }}
                />
            </div>
        </nav>
    );
}
