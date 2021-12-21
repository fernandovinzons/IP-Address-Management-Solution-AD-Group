export interface AuditModel {
  id: number;
  auditable_id: string;
  auditable_type: string;
  event: string;
  url: string;
  ip_address: string;
  user_agent: string;
  created_at: string;
  updated_at: string;
  user_id: number;
}
