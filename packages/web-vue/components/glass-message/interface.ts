export interface GlassMessageProps {
    message: string;
    type?: 'info' | 'success' | 'warning' | 'error';
    duration?: number;
}