'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(3, 'Please enter a subject'),
  message: z.string().min(10, 'Please enter at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    toast({
      title: 'Message sent',
      description: 'We will get back to you within 2 business days.',
    });
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-2xl p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold font-heading mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          Your message has been received. We will respond within 2 business days.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-full">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" {...register('name')} aria-invalid={!!errors.name} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" {...register('email')} aria-invalid={!!errors.email} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" placeholder="What is this about?" {...register('subject')} aria-invalid={!!errors.subject} />
        {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={6} placeholder="Tell us what you need..." {...register('message')} aria-invalid={!!errors.message} />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="btn-gradient rounded-full w-full md:w-auto">
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
