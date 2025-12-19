'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ScrollAnimateWrapper } from '@/components/ScrollAnimateWrapper';
import Modal from '@/components/Modal';

interface TeamMember {
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alessandro Afornali',
    image: '/Images/Corpo Tecnico/afornali.jpeg',
    shortDescription: 'Bacharelado e licenciado em Biologia, fez especialização em Genética Humana, concluiu o mestrado em Biologia Celular e Molecular pela Fundação Oswaldo Cruz (Fiocruz – RJ)...',
    fullDescription: 'Bacharelado e licenciado em Biologia, fez especialização em Genética Humana, concluiu o mestrado em Biologia Celular e Molecular pela Fundação Oswaldo Cruz (Fiocruz – RJ). Atua na área de genética e biologia molecular com ênfase em diagnóstico molecular de doenças infecciosas e genéticas.'
  },
  {
    name: 'Israel Feferman',
    image: '/Images/Corpo Tecnico/israel.jpeg',
    shortDescription: 'Farmacêutico-Bioquímico, formado pela Universidade de São Paulo, com MBA em Gestão Empresarial pela Fundação Getúlio Vargas, Gestão Estratégica na Fundação Dom Cabral...',
    fullDescription: 'Farmacêutico-Bioquímico, formado pela Universidade de São Paulo, com MBA em Gestão Empresarial pela Fundação Getúlio Vargas, Gestão Estratégica na Fundação Dom Cabral. Possui vasta experiência na indústria farmacêutica e em gestão de laboratórios.'
  },
  {
    name: 'Roberto Herai',
    image: '/Images/Corpo Tecnico/herai.jpg',
    shortDescription: 'Bacharel em Computação (UEPG, Brasil), Mestre em Engenharia Elétrica e Computação (UNICAMP, Brasil), Doutor em Genética e Biologia Molecular (UNICAMP, Brasil), Pós-doutor em Genética...',
    fullDescription: 'Bacharel em Computação (UEPG, Brasil), Mestre em Engenharia Elétrica e Computação (UNICAMP, Brasil), Doutor em Genética e Biologia Molecular (UNICAMP, Brasil), Pós-doutor em Genética. Especialista em bioinformática e análise de dados genômicos.'
  }
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="bg-white p-24">
        <h2 className="text-2xl font-light text-gray-500 mb-2 uppercase tracking-wide">O Corpo Técnico</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col pt-6 border-t border-gray-400">
                    <ScrollAnimateWrapper animation='fade-in-up'>
                        <div className="mb-6 relative w-32 h-32">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl text-gray-500 font-light mb-4">{member.name}</h3>
                        <ScrollAnimateWrapper animation='fade-in-left'>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                {member.shortDescription}
                            </p>
                        </ScrollAnimateWrapper>
                        <div className="mt-auto">
                            <div className="border-t border-gray-400 w-12 mb-2"></div>
                            <span 
                                className="text-gray-500 text-sm font-light uppercase cursor-pointer hover:text-gray-800"
                                onClick={() => setSelectedMember(member)}
                            >
                                Leia Mais
                            </span>
                        </div>
                    </ScrollAnimateWrapper>
                </div>
            ))}
        </div>

        <Modal isOpen={!!selectedMember} onClose={() => setSelectedMember(null)}>
            {selectedMember && (
                <div className="flex flex-col items-center text-center">
                    <div className="relative w-48 h-48 mb-6">
                        <Image
                            src={selectedMember.image}
                            alt={selectedMember.name}
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                    <h3 className="text-3xl text-gray-800 font-light mb-4">{selectedMember.name}</h3>
                    <div className="w-16 h-px bg-gray-300 mb-6"></div>
                    <p className="text-gray-600 leading-relaxed text-left w-full">
                        {selectedMember.fullDescription}
                    </p>
                </div>
            )}
        </Modal>
    </div>
  );
}
