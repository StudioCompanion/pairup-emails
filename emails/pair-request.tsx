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

interface PairUpWelcomeEmailProps {
    receiverUsername?: string;
    receiverFirstName?: string;
    requesterFirstName?: string;
    requesterLastName?: string;
    messageContents?: string;
    viewRequestLink?: string;
  }

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export const PairUpRequestEmail = ({
    receiverUsername = 'fredbrooks',
    receiverFirstName = 'Fred',
    requesterFirstName = 'Alice',
    requesterLastName = 'Treatwell',
    messageContents = 'Hi Sarah, \n \n My names Alice,  I’m a digital designer for a creative agency here in London. Unfortunately our team is very small and I’m the only creative, so I’m looking for people I can bounce ideas off and get another creative opinion on some of my ideas. \n \n I saw that you’re also a digital designer so thought we’d be a great fit! Let me know if you’re interested.',
    viewRequestLink = 'https://pair-up.org/request/4323432'
}) => (
    <Html>
        <Head/>
        <Preview>Preview Text</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={primary}>
                    <Text style={heading}>
                        You're popular!
                    </Text>
                    <Text style={paragraph}>
                    <b>{requesterFirstName} {requesterLastName}</b> has sent you a pairing request. See what they had to say below.
                    </Text>
                </Section>
                <Section style={secondary}>
                    <Text style={messageContainer}>
                    "{messageContents}"
                    </Text>
                    <Button pX={12} pY={12} style={button} href={viewRequestLink}>
                        View Request
                    </Button>
                </Section>
                <Section style={footer}>
                    <Img
                        style={logo}
                        src={`${baseUrl}/static/pairup-logo.png`}
                        width="85%"
                        height="85%"
                        alt="Pair Up"/>
                    <Text style={footerText}>
                        This email was intended for {receiverUsername}. If you were not expecting this, you can
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

export default PairUpRequestEmail;

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
    minHeight: '200px',
    textAlign: 'center' as const
};

const secondary = {
    backgroundColor: '#FFFFFF',
    padding: '48px 48px',
    borderRadius: '20px',
    minHeight: '200px',
    marginTop: '16px'
};

const messageContainer = {
    background: 'none',
    color: '#1B1B1B',
    fontSize: '18px',
    lineHeight: '24px',
    textAlign: 'left' as const,
    whiteSpace: 'pre-line',
    marginBlockStart: '0px',
    marginBlockEnd: '0px',
    marginBottom: '16px'
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