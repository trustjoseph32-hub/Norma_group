import React from 'react';
import { Container, Section } from '../ui/Layout';
import { MessageSquare, AlertCircle } from 'lucide-react';
import { groupConfig } from '../../config/groupConfig';

export const ChatBoundaries: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)]">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-12">
            Что происходит между встречами
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-[var(--color-norma-accent)]" size={24} />
                <h3 className="text-xl font-medium text-[var(--color-norma-text)]">Закрытый чат</h3>
              </div>
              <p className="text-[var(--color-norma-text)]/80 leading-relaxed mb-6">
                Между встречами участники пользуются закрытым групповым чатом: размещают бриф-отчёты, фиксируют наблюдения, задают вопросы по упражнениям и получают организационное и курирующее сопровождение.
              </p>
              <div className="bg-[var(--color-norma-bg)] p-4 rounded-xl text-sm text-[var(--color-norma-text)]/80">
                <span className="font-medium block mb-2">Ответы ведущего ({groupConfig.timezone}):</span>
                <ul className="list-disc pl-5 space-y-1">
                  {groupConfig.chatReplyTimes.map((time, idx) => (
                    <li key={idx}>ориентировочно в {time}</li>
                  ))}
                </ul>
                <p className="mt-3 text-xs opacity-70">Технические и срочные организационные вопросы могут обрабатываться отдельно.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-[var(--color-norma-terracotta)]" size={24} />
                <h3 className="text-xl font-medium text-[var(--color-norma-text)]">Границы формата</h3>
              </div>
              <p className="font-medium text-[var(--color-norma-text)] mb-4">
                Работа в чате не предполагает проведение индивидуальной терапии в переписке.
              </p>
              <p className="text-[var(--color-norma-text)]/80 text-sm mb-3">В чате ведущий не проводит:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "индивидуальные терапевтические сессии",
                  "длительные разборы личных переживаний",
                  "кризисные консультации",
                  "диагностические сессии",
                  "полноценную работу с травматическим материалом",
                  "индивидуальные гипнотерапевтические интервенции"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[var(--color-norma-text)]/70">
                    <span className="text-[var(--color-norma-terracotta)] mt-1.5 shrink-0 w-1 h-1 rounded-full bg-current" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-[var(--color-norma-accent-light)]/40 p-6 md:p-8 rounded-2xl text-center">
            <p className="text-[var(--color-norma-text)]/90 leading-relaxed font-medium">
              Чат помогает ориентироваться в программе, выполнять задания и готовить материал для группы, но не заменяет регламентированные групповые встречи, индивидуальную психотерапию или экстренную помощь.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
