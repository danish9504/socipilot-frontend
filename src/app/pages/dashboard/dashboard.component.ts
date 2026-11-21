import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { ConnectedAccountsComponent } from './widgets/connected-accounts/connected-accounts.component';
import { EngagementChartComponent } from './widgets/engagement-chart/engagement-chart.component';
import { RecentActivityComponent } from './widgets/recent-activity/recent-activity.component';
import { UpcomingPostsComponent } from './widgets/upcoming-posts/upcoming-posts.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    SidebarComponent,
    TopbarComponent,
    StatCardComponent,
    EngagementChartComponent,
    ConnectedAccountsComponent,
    UpcomingPostsComponent,
    RecentActivityComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  menuOpen = false;
  userName = 'Creator';

  // Demo data. Replace with real numbers from your API later
  stats = [
    { icon: '📅', label: 'Scheduled posts', value: '24', change: '+4 this week', positive: true },
    { icon: '💬', label: 'Auto replies sent', value: '138', change: '+22% vs last week', positive: true },
    { icon: '🔗', label: 'Connected accounts', value: '4', change: '1 needs attention', positive: false },
    { icon: '📈', label: 'Engagement rate', value: '6.8%', change: '+1.2%', positive: true },
  ];
}
