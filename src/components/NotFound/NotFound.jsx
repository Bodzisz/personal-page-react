import React from 'react';
import { Title, Text, Button, Container, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Container className="glass" size="sm" p="xl" mt={100} style={{ borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ padding: '40px' }}>
                <Title order={1} style={{ fontSize: '4rem', marginBottom: '20px', color: '#fff' }}>404</Title>
                <Title order={2} style={{ marginBottom: '20px', color: '#e0e0e0' }}>Page Not Found</Title>
                <Text c="dimmed" size="lg" ta="center" mx="auto" mt="xl" mb="xl">
                    The page you are looking for does not exist. It might have been moved or deleted.
                </Text>
                <Group justify="center">
                    <Button size="md" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={() => navigate('/')}>
                        Go to Main Page
                    </Button>
                </Group>
            </div>
        </Container>
    );
}
