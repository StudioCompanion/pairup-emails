import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text
} from '@react-email/components';
import * as React from 'react';

interface PairUpForgotEmailProps {
    firstName?: string;
    username?: string;
    resetPasswordLink?: string;
  }

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export const PairUpForgotEmail = ({
    username = 'fredbrooks',
    firstName = 'Fred',
    resetPasswordLink = 'https://pair-up.org/reset/4323432'
}) => (
    <Html>
        <Head/>
        <Preview>Preview Text</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={primary}>
                    <Text style={heading}>
                        Things gone a bit pear shaped?
                    </Text>
                    <Text style={paragraph}>
                    Forgot your password have you? 
                    Don't worry {firstName}, you can create a new one below.
                    </Text>
                    <Button pX={12} pY={12} style={button} href={resetPasswordLink}>
                        Reset Password
                    </Button>
                    <Text style={subText}>
                        This link will expire in 30 minutes.
                    </Text>
                </Section>
                <Section style={footer}>
                    <Img
                        style={logo}
                        src={`${baseUrl}/static/pairup-logo.png`}
                        width="85%"
                        height="85%"
                        alt="Pair Up"/>
                    <Text style={footerText}>
                        This email was intended for {username}. If you were not expecting this, you can
                        ignore this email. If you are concerned, please contact{' '}
                        <Link href="mailto:support@pair-up.org" style={anchor}>
                            support@pair-up.org.
                        </Link>{' '}
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default PairUpForgotEmail;

const main = {
    backgroundColor: '#FAF5E8',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,san' +
            's-serif'
};

const container = {
    backgroundColor: 'none',
    margin: '0 auto',
    padding: '20px 0 48px',
    margin: '0px auto'
};

const primary = {
    backgroundColor: '#AFD0DD',
    padding: '24px 48px',
    borderRadius: '20px',
    minHeight: '400px',
    textAlign: 'center' as const
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0'
};

const paragraph = {
    color: '#1B1B1B',
    fontSize: '18px',
    lineHeight: '24px',
    textAlign: 'center' as const
};

const anchor = {
    color: '#1B1B1B',
    textDecoration: 'underline'
};

const heading = {
    color: '#1B1B1B',
    fontSize: '44px',
    lineHeight: '52px',
    fontWeight: '600',
    letterSpacing: '-0.5px',
    textAlign: 'center' as const
}

const button = {
    backgroundColor: '#1B1B1B',
    borderRadius: '30px',
    color: '#ffffff',
    fontSize: '16px',
    textTransform: 'none',
    fontWeight: '300',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    textAlign: 'center' as const,
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
    };

    const footer = {
        marginTop: '24px'
    }

    const subText = {
        color: '#1B1B1B',
        fontSize: '12px',
        lineHeight: '16px',
    };

    const footerText = {
        padding: '0px 24px',
        textAlign: 'center',
        color: '#8A8881',
        fontSize: '12px',
        lineHeight: '16px',
        margin: '12px'
    };

    const logo = {
        margin: '0px auto'
    };