import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        // Parse the form data
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Validation (mirroring client-side validation rules in contactform.js)
        if (!name || typeof name !== 'string' || name.length < 4) {
            return new NextResponse('Please enter at least 4 chars', { status: 400 });
        }
        if (!email || typeof email !== 'string' || !/^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i.test(email)) {
            return new NextResponse('Please enter a valid email', { status: 400 });
        }
        if (!subject || typeof subject !== 'string' || subject.length < 4) { // contactform.js says 8 chars in msg but 4 in rule? rule minlen:4
            return new NextResponse('Please enter at least 8 chars of subject', { status: 400 });
        }
        if (!message || typeof message !== 'string') {
            return new NextResponse('Please write something for us', { status: 400 });
        }

        // In a real application, we would send an email here.
        // For this migration, we log the message and return success.
        console.log('Contact Form Submission:', { name, email, subject, message });

        // contactform.js expects "OK" string
        return new NextResponse('OK', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain',
            },
        });

    } catch (error) {
        console.error('Contact API Error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
