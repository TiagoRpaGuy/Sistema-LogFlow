import React from 'react';
import ComingSoonButton from '../../components/ui/ComingSoonButton';

const MOCK_USUARIOS = [
    { id: 1, nome: 'João Silva', email: 'joao.silva@soares.com', cargo: 'Operador', status: 'active', avatar: 'https://picsum.photos/seed/u1/40' },
    { id: 2, nome: 'Maria Oliveira', email: 'maria.oliveira@soares.com', cargo: 'Supervisor', status: 'active', avatar: 'https://picsum.photos/seed/u2/40' },
    { id: 3, nome: 'Roberto Lima', email: 'roberto.lima@soares.com', cargo: 'Auditor', status: 'active', avatar: 'https://picsum.photos/seed/u3/40' },
    { id: 4, nome: 'Ana Costa', email: 'ana.costa@soares.com', cargo: 'Administrador', status: 'active', avatar: 'https://picsum.photos/seed/u4/40' },
    { id: 5, nome: 'Carlos Mendes', email: 'carlos.mendes@soares.com', cargo: 'Operador', status: 'inactive', avatar: 'https://picsum.photos/seed/u5/40' },
];

const UsuariosPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                        <span>Configurações</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-white">Usuários</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Gerenciar Usuários</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Adicione, edite e gerencie permissões de usuários do sistema.</p>
                </div>
                <ComingSoonButton
                    label="Adicionar Usuário"
                    icon="person_add"
                    variant="primary"
                    featureTitle="Adicionar Usuário"
                    featureDescription="Crie novos usuários e configure suas permissões de acesso ao sistema."
                />
            </div>

            {/* Users Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors duration-200">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                                <th className="px-6 py-4">Usuário</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Cargo</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {MOCK_USUARIOS.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={user.avatar} className="size-10 rounded-full object-cover" alt="" />
                                            <span className="text-slate-900 dark:text-white font-semibold text-sm">{user.nome}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-slate-500 dark:text-slate-400 text-sm">{user.email}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-slate-600 dark:text-slate-300 text-sm">{user.cargo}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${user.status === 'active'
                                                ? 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400'
                                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                                            }`}>
                                            <span className={`size-1.5 rounded-full ${user.status === 'active' ? 'bg-green-500' : 'bg-slate-400'}`}></span>
                                            {user.status === 'active' ? 'Ativo' : 'Inativo'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <ComingSoonButton
                                                label=""
                                                icon="edit"
                                                variant="ghost"
                                                size="sm"
                                                featureTitle="Editar Usuário"
                                                featureDescription="Edite as informações e permissões deste usuário."
                                            />
                                            <ComingSoonButton
                                                label=""
                                                icon="delete"
                                                variant="ghost"
                                                size="sm"
                                                featureTitle="Remover Usuário"
                                                featureDescription="Desative ou remova este usuário do sistema."
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UsuariosPage;
