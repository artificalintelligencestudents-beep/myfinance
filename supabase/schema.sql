create table if not exists public.transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  description text not null,
  category text not null,
  amount numeric(12, 2) not null check (amount >= 0),
  type text not null check (type in ('income', 'expense')),
  date date not null default current_date,
  created_at timestamptz not null default now()
);

alter table public.transactions enable row level security;

create policy "Users can view own transactions"
  on public.transactions for select
  using (auth.uid() = user_id);

create policy "Users can insert own transactions"
  on public.transactions for insert
  with check (auth.uid() = user_id);

create policy "Users can update own transactions"
  on public.transactions for update
  using (auth.uid() = user_id);

create policy "Users can delete own transactions"
  on public.transactions for delete
  using (auth.uid() = user_id);
