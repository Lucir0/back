import { Request, Response } from 'express';
import ExcelJS from 'exceljs';
import exportService from '../services/exportService';

export const exportUsersToExcel = async (req: Request, res: Response) => {
  try {
    const exportData = await exportService.getExportData();

    if (exportData.length === 0) {
      return res.status(204).send({ message: 'No data available for export' }); // 204 No Content
    }

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Users');

    worksheet.columns = [
      { header: 'Horodateur', key: 'timestamp', width: 20 },
      { header: 'ID étudiant', key: 'studentId', width: 20 },
      { header: 'FORMATION de l\'étudiant en 23-24', key: 'studentFormation', width: 30 },
      { header: 'NOM de l\'étudiant (en majuscule)', key: 'lastName', width: 30 },
      { header: 'Prénom de l\'étudiant', key: 'firstName', width: 30 },
      { header: 'NOM de l\'entreprise', key: 'companyName', width: 30 },
      { header: 'NOM du tuteur entreprise', key: 'tutorLastName', width: 30 },
      { header: 'Prénom du tuteur entreprise', key: 'tutorFirstName', width: 30 },
      { header: 'POSTE occupé par l\'étudiant', key: 'studentPosition', width: 30 },
      { header: 'MISSIONS confiées à l\'étudiant', key: 'studentMissions', width: 50 },
      { header: 'Pour les MASTERES 2 - merci de préciser le sujet du mémoire', key: 'masterThesisSubject', width: 50 },
      { header: 'Déclarer une ALERTE au Service Relations Entreprises ?', key: 'enterpriseAlert', width: 50 },
      { header: 'Déclarer une ALERTE au Service Pédagogique ?', key: 'pedagogicalAlert', width: 50 },
      { header: 'L\'entreprise a-t-elle des projets de recrutement', key: 'recruitmentProjects', width: 50 },
      { header: 'L\'alternant a-t-il un projet de poursuite d\'études', key: 'furtherStudiesProject', width: 50 },
      { header: 'COMMENTAIRE sur l\'entretien de suivi', key: 'followUpComment', width: 50 },
      { header: 'NOM du suiveur Ecole', key: 'schoolFollowerName', width: 30 },
      { header: 'DATE du suivi', key: 'followUpDate', width: 20 },
      { header: 'FORMAT du suivi', key: 'followUpFormat', width: 20 },
      { header: 'L\'étudiant est présent au RDV', key: 'studentPresent', width: 20 },
    ];

    exportData.forEach(data => {
      worksheet.addRow(data);
    });

    const buffer = await workbook.xlsx.writeBuffer();
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="users.xlsx"');
    res.send(buffer);
  } catch (err) {
    res.status(500).send({ error: 'Failed to export users' });
  }
};
