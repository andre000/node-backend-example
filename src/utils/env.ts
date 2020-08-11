import { config } from 'dotenv';

const path = process.env.NODE_ENV === 'development' ? '.env.dev' : '.env';

config({ path });
